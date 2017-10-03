import { connect } from 'react-redux'
import Nav from '../../components/root/nav'
import { revokeToken } from '../../actions/auth/auth'

const mapDispatchToProps = dispatch => ({
  revokeToken: () => dispatch(revokeToken())
})

const mapStateToProps = state => ({
  user: state.Auth.user
})

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer
