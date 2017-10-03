import { tokenEpic } from '../actions/auth/auth'
import { createEpicMiddleware, combineEpics } from 'redux-observable'

export const rootEpic = combineEpics(
  tokenEpic
)

const epicMiddleware = createEpicMiddleware(rootEpic)

export default epicMiddleware
