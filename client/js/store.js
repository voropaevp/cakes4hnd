import { createStore, applyMiddleware, compose } from 'redux'
import { browserHistory } from 'react-router'
import { routerMiddleware } from 'react-router-redux'

const configureStore = (reducer, middleware) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  return createStore(
    reducer,
    undefined,
    composeEnhancers(applyMiddleware(...middleware, routerMiddleware(browserHistory)))
  )
}

export default configureStore
