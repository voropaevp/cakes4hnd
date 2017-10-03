import { combineReducers } from 'redux'
import Auth from './auth'
import { routerReducer } from 'react-router-redux'
import { cartReducer } from 'react-shopping-cart'

const rootReducer = combineReducers(
  {
    Auth,
    routing: routerReducer,
    cart: cartReducer
  }
)

export default rootReducer
