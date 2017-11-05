import { connect } from 'react-redux'
import Shop from '../../components/shop/shop'
import { tourStep } from '../../actions/tour'

const mapStateToProps = state => ({
  products: state.Shop.products,
  cartProducts: state.cart.products,
  tourStage: state.Tour.stage
})

const mapDispatchToProps = dispatch => ({
  tourNextStep: () => dispatch(tourStep())
})

const ShopContainer = connect(mapStateToProps, mapDispatchToProps)(Shop)
export default ShopContainer
