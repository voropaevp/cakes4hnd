import { connect } from 'react-redux'
import Shop from '../../components/shop/shop'

const mapStateToProps = state => ({
  products: state.Shop.products
})

const ShopContainer = connect(mapStateToProps)(Shop)
export default ShopContainer
