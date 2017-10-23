import { combineReducers } from 'redux'
import Auth from './auth'
import { routerReducer } from 'react-router-redux'
import { cartReducer } from 'react-shopping-cart'
import Shop from './shop'

export const rootReducer = combineReducers(
  {
    Auth,
    Shop,
    routing: routerReducer,
    cart: cartReducer
  }
)

export default rootReducer
