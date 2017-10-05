import { connect } from 'react-redux'
import Nav from '../../components/root/nav'

const mapDispatchToProps = dispatch => ({
  revokeToken: () => dispatch(() => {}) // should be real logout action
})

const mapStateToProps = state => ({
  user: state.Auth.user
})

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav)
export default NavContainer
