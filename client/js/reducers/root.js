import { combineReducers } from 'redux'
import Auth from './auth'
import { routerReducer } from 'react-router-redux'
import { cartReducer } from 'react-shopping-cart'
import Shop from './shop'
import Tour from './tour'

export const rootReducer = combineReducers(
  {
    Auth,
    Shop,
    Tour,
    routing: routerReducer,
    cart: cartReducer
  }
)

export default rootReducer
