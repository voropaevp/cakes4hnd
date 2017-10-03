import { generateApiEpic, generateRefreshApiEpic } from '../../utils/api'
import { combineEpics } from 'redux-observable'
import { AUTH_TOKEN_URL, REFRESH_TOKEN_URL } from '../../api'

export const REVOKE_TOKEN = 'REVOKE_TOKEN'
export const FETCH_TOKEN_REQUEST = 'FETCH_TOKEN_REQUEST'
export const FETCH_TOKEN_PENDING = 'FETCH_TOKEN_PENDING'
export const FETCH_TOKEN_SUCCESS = 'FETCH_TOKEN_SUCCESS'
export const FETCH_TOKEN_FAILURE = 'FETCH_TOKEN_FAILURE'

export const fetchToken = credentials => ({
  type: FETCH_TOKEN_REQUEST,
  credentials
})

export const revokeToken = () => ({
  type: REVOKE_TOKEN
})

export const tokenAPIConfig = {
  actions: {
    request: FETCH_TOKEN_REQUEST,
    pending: FETCH_TOKEN_PENDING,
    success: FETCH_TOKEN_SUCCESS,
    failure: FETCH_TOKEN_FAILURE
  },
  requestConfig: action => ({
    url: AUTH_TOKEN_URL,
    body: JSON.stringify(action.credentials)
  })
}

export const getTokenEpic = generateApiEpic(tokenAPIConfig)

export const REFRESH_TOKEN_REQUEST = 'REFRESH_TOKEN_REQUEST'
export const REFRESH_TOKEN_PENDING = 'REFRESH_TOKEN_PENDING'
export const REFRESH_TOKEN_SUCCESS = 'REFRESH_TOKEN_SUCCESS'
export const REFRESH_TOKEN_FAILURE = 'REFRESH_TOKEN_FAILURE'

export const refreshToken = credentials => ({
  type: REFRESH_TOKEN_REQUEST,
  credentials
})

export const refreshTokenAPIConfig = {
  actions: {
    request: REFRESH_TOKEN_REQUEST,
    pending: REFRESH_TOKEN_PENDING,
    success: REFRESH_TOKEN_SUCCESS,
    failure: REFRESH_TOKEN_FAILURE
  },
  requestConfig: action => ({
    url: REFRESH_TOKEN_URL,
    body: JSON.stringify(action.credentials)
  })
}

export const refreshTokenEpic = generateRefreshApiEpic(refreshTokenAPIConfig)

export const tokenEpic = combineEpics(getTokenEpic, refreshTokenEpic)
