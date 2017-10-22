import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Nav, NavbarBrand, NavLink, NavbarToggler, Collapse, Row, Col } from 'reactstrap'
import { Link } from 'react-router'
import SignIn from '../../containers/root/forms/signIn'
import { SMALL_LOGO, ADMIN_USER } from '../../constants'
import { styles } from '../../styles'

export class CakesNav extends React.Component {
  constructor (props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <Navbar color='faded' light toggleable style={styles.nav.root}>
        <NavbarToggler right onClick={this.toggle}/>
        <NavbarBrand> <img style={styles.nav.smallLogo} href='#' src={SMALL_LOGO}/> </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Row style={styles.nav.row}>
            <Col xs={12} sm={8}>
              <Nav navbar>
                <NavLink tag={Link} active to='/shop'>Shop</NavLink>
                <NavLink tag={Link} to='/about'>About Us</NavLink>
                {
                  this.props.user === ADMIN_USER &&
                  <NavLink style={styles.nav.adminLink} tag={Link} to='/admin'>Admin</NavLink>
                }
                {
                  !this.props.user
                    ? <NavLink tag={Link} to='/signup'>Sign Up</NavLink>
                    : <NavLink tag={Link} to={`/profile/${this.props.user}`}>{this.props.user} profile</NavLink>
                }
                {Object.keys(this.props.cartProducts).length !== 0 &&
                <NavLink style={styles.nav.checkOut} tag={Link} to='/checkout'>
                  <i className='fa fa-cart-arrow-down' aria-hidden='true' /> Check Out</NavLink>}
              </Nav>
            </Col>
            <Col xs={12} sm={4}>
              <Nav className='ml-auto'>
                {
                  this.props.user
                    ? <NavLink tag={Link} to='/signout' onClick={this.props.revokeToken}>Sign Out</NavLink>
                    : <SignIn key='sign_in'/>
                }
              </Nav>
            </Col>
          </Row>
        </Collapse>
      </Navbar>
    )
  }
}

CakesNav.propTypes = {
  user: PropTypes.string,
  cartProducts: PropTypes.any,
  revokeToken: PropTypes.func.isRequired
}

export default CakesNav
