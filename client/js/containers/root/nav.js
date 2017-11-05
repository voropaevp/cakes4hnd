import { connect } from 'react-redux'
import Nav from '../../components/root/nav'
import { tourStep } from '../../actions/tour'

const mapDispatchToProps = dispatch => ({
  revokeToken: () => dispatch(() => {}), // should be real logout action
  tourNextStep: () => dispatch(tourStep())
})

const mapStateToProps = state => ({
  user: state.Auth.user,
  cartProducts: state.cart.products,
  tourStage: state.Tour.stage
})

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer
