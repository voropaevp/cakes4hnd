
export const initialState = {
  error: null,
  token: null,
  refreshToken: null,
  isFetching: false,
  tokenRefreshState: null
}

function Auth (state = initialState, action) {
  switch (action.type) {
    // Auth actions go here
    default:
      return state
  }
}

export default Auth
