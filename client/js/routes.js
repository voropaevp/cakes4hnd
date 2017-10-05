import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/root/app'
import About from './components/about/about'
import Shop from './containers/shop/shop'
import {SignUp} from './components/signup/signup'

import { syncHistoryWithStore } from 'react-router-redux'

const createRoutes = store => {
  const history = syncHistoryWithStore(browserHistory, store)
  return (<Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute components={Shop} />
        <Route path='/shop' components={Shop} />
        <Route path='/about' components={About} />
        <Route path='/signup' components={SignUp} />
      </Route>
    </Router>
  </Provider>)
}

export default createRoutes
