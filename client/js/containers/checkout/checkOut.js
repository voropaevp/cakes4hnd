import { connect } from 'react-redux'
import CheckOut from '../../components/checkout/checkOut'
import { tourStep } from '../../actions/tour'
import { cartActions, cartHelpers } from 'react-shopping-cart'

const mapStateToProps = state => ({
  deliveries: state.Shop.deliveries,
  cartProducts: state.cart.products,
  tourStage: state.Tour.stage
})

const mapDispatchToProps = dispatch => ({
  addToCart: d => dispatch(cartActions.addToCart(cartHelpers.generateProductKey(d.id, d.properties), d, d.currency)),
  removeFromCart: d => dispatch(cartActions.removeFromCart(cartHelpers.generateProductKey(d.id, d.properties))),
  tourNextStep: () => dispatch(tourStep())
})

const CheckOutContainer = connect(mapStateToProps, mapDispatchToProps)(CheckOut)
export default CheckOutContainer
