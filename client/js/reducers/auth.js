import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_PENDING,
  FETCH_TOKEN_FAILURE,
  REVOKE_TOKEN
} from '../actions/auth/auth'

export const initialState = {
  error: null,
  token: null,
  refreshToken: null,
  isFetching: false,
  tokenRefreshState: null,
  serviceMode: false
}

function Auth (state = initialState, action) {
  switch (action.type) {
    case FETCH_TOKEN_REQUEST:
      return {
        ...state,
        error: null
      }
    case FETCH_TOKEN_PENDING:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_TOKEN_SUCCESS:
      return {
        ...state,
        user: action.response.user,
        token: action.response.token,
        isFetching: false,
        error: null
      }
    case FETCH_TOKEN_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false
      }
    case REVOKE_TOKEN:
      return {
        ...state,
        error: action.error,
        token: null,
        refreshToken: null
      }
    default:
      return state
  }
}

export default Auth
