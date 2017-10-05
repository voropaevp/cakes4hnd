import ReactDom from 'react-dom'
import createRoutes from './routes'
import createStore from './store'
import rootReducer from './reducers/root'
import {setCartCurrency} from 'react-shopping-cart'

export const store = createStore(rootReducer)
store.dispatch(setCartCurrency('USD'))

export const routes = createRoutes(store)
const mountPoint = document.getElementById('root')

ReactDom.render(
  routes,
  mountPoint
)
