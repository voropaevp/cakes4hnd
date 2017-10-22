import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/root/app'
import About from './components/about/about'
import Shop from './containers/shop/shop'
import NotFound from './components/errors/404'
import {SignUp} from './components/signup/signup'
import CheckOut from './containers/checkout/checkOut'
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
        <Route path='/checkout' components={CheckOut} />
        <Route path='*' exact component={NotFound} />
      </Route>
    </Router>
  </Provider>)
}

export default createRoutes
