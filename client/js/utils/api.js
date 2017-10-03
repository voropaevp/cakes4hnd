import * as Rx from 'rxjs'
import HttpStatus from 'http-status-codes'
import { REVOKE_TOKEN, REFRESH_TOKEN_SUCCESS, REFRESH_TOKEN_PENDING } from '../actions/auth/auth'
import { AUTH_ERROR_CODE_LIST, API_REQUEST_TIMEOUT } from '../constants'
import { REFRESH_TOKEN_URL } from '../api'

function thunkRequestConfig (requestConfig, action) {
  if (typeof requestConfig === 'function') {
    return requestConfig(action)
  } else {
    return requestConfig
  }
}

// actions - object with request, pending, success, failure keys action types string
// requestConfig - Rx.Observable.ajax config object or function, which returns config object given `action` as an input
// isAuthRequired - boolean flag, setting it will add extra auth header to the request.

export const generateApiEpic = ({actions, requestConfig, isAuthRequired}) => {
  return (action$, {getState}) => action$.ofType(actions.request).mergeMap(action => {

    let makeErrState = (error, description) => Rx.Observable.of({
      type: actions.failure,
      originalAction: action,
      status: error.status,
      error: description || HttpStatus.getStatusText(error.status)
    })

    let errHandler = error => {
      // in case refresh token request was sent already
      if (getState().Auth.tokenRefreshState === 'pending') {
        return new Promise(resolve => setTimeout(resolve, API_REQUEST_TIMEOUT)).then(() => {
          if (getState().Auth.tokenRefreshState === null) {
            return action
          }
          return {
            type: actions.failure,
            originalAction: action,
            status: 401,
            error: HttpStatus.getStatusText(401)
          }
        })
      } else {
        // token expired, need to refresh
        if (AUTH_ERROR_CODE_LIST.includes(error.status) && isAuthRequired &&
          getState().Auth.tokenRefreshState !== 'error') {
          return Rx.Observable.ajax({
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' + getState().Auth.refreshToken
            },
            url: REFRESH_TOKEN_URL
          }).mergeMap(ajaxResponse => {
            // token refreshed, need to resend action
            return Rx.Observable.of({
              type: REFRESH_TOKEN_SUCCESS,
              response: ajaxResponse.response,
              originalAction: action
            }, action)
          }).startWith({
            type: REFRESH_TOKEN_PENDING
          }).catch(err => {
            // can't refresh token, revoke it and return action error
            return Rx.Observable.of({
              type: REVOKE_TOKEN,
              originalAction: action
            }, makeErrState(error))
          })
        }
        let desc = null
        if (error.xhr &&
          error.xhr.responseType === 'json' &&
          error.xhr.response) {
          desc = error.xhr.response.msg
        }
        return makeErrState(error, desc)
      }
    }
    return Rx.Observable.ajax({
      headers: !isAuthRequired ? {} : {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getState().Auth.token
      },
      method: 'POST',
      ...thunkRequestConfig(requestConfig, action)
    }).map(ajaxResponse => ({
      type: actions.success,
      response: ajaxResponse.response,
      originalAction: action
    })).startWith({
      type: actions.pending,
      originalAction: action
    }).catch(error => errHandler(error))

  })
}

export const generateRefreshApiEpic = ({actions, requestConfig}) => {
  return (action$, {getState}) => action$.ofType(actions.request).mergeMap(action => {
    return Rx.Observable.ajax({
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + getState().Auth.refreshToken
      },
      method: 'POST',
      ...thunkRequestConfig(requestConfig, action)
    }).map(ajaxResponse => ({
      type: actions.success,
      response: ajaxResponse.response,
      originalAction: action
    })).startWith({
      type: actions.pending,
      originalAction: action
    }).catch(error => Rx.Observable.of({
      type: actions.failure,
      originalAction: action,
      status: error.status,
      error: HttpStatus.getStatusText(error.status)
    }))
  })
}
