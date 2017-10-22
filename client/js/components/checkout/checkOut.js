import React from 'react'
import { browserHistory } from 'react-router'
import { Button, Form, FormGroup, Label, Input, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { Cart, cartLocalization } from 'react-shopping-cart'
import { LOCALISATION } from '../../constants'
import PropTypes from 'prop-types'
import { styles } from '../../styles'

const {getDefaultLocalization} = cartLocalization

class CheckOut extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      getCartLocalisation: getDefaultLocalization('cart', 'en', LOCALISATION),
      modal: false
    }
    this.toggle = this.toggle.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeliveryChange = this.handleDeliveryChange.bind(this)
    this.redirectEmptyCart(props)
  }

  componentWillReceiveProps (nextProps) {
    this.redirectEmptyCart(nextProps)
  }

  redirectEmptyCart (props) {
    if (Object.keys(props.cartProducts).length < 1) {
      setTimeout(() => { browserHistory.push('/shop') }, 500)
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.setState({
      modal: true
    })
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    })
  }

  handleDeliveryChange (e) {
    Object.values(this.props.cartProducts).map(p => {
      p.type === 'delivery' && this.props.removeFromCart(p)
    })
    this.props.addToCart(this.props.deliveries.filter(d => (d.id === e.target.value))[0])
  }

  render () {
    return <div style={styles.checkOut}>
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Payment Complete</ModalHeader>
        <ModalBody>
          Thank you!
        </ModalBody>
      </Modal>
      <Row style={styles.row}>
        <Col xs={12} sm={12} md={6} lg={5} xl={4}>
          <Form style={{...styles.row, ...styles.signup}}>
            <FormGroup>
              <Label for='checkOutEmail'>Email/Login</Label>
              <Input type='email' name='email' id='checkOutEmail' placeholder='your@email.com'/>
            </FormGroup>
            <FormGroup>
              <Label for='checkOutAddress'>Address</Label>
              <Input type='textarea' name='text' id='checkOutAddress'/>
            </FormGroup>
            <FormGroup>
              <Label for='exampleSelect'>Delivery Method</Label>
              <Input type='select' name='select' id='deliverySelect' onChange={this.handleDeliveryChange}>
                <option value='none'>Select Delivery Option</option>
                <option value='pickup'>Pick at the store</option>
                <option value='normal-delivery'>Normal delivery 2-3 business days</option>
                <option value='next-day-delivery'>Next business day delivery</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for='pickupDeliveryTime'>Desired time for Pick Up/Delivery</Label>
              <Input type='time' name='pickupDeliveryTime' id='pickupDeliveryTime' placeholder='time placeholder'/>
            </FormGroup>
            <Button onClick={this.handleSubmit}>Submit</Button>
          </Form>
        </Col>
        <Col xs={12} sm={12} md={6} lg={7} xl={8}>
          <Cart
            onChange={this.props.cartProducts}
            getLocalization={this.state.getCartLocalisation}
            checkoutButton={<div/>}
          />
        </Col>
      </Row>
    </div>
  }
}

CheckOut.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cartProducts: PropTypes.any,
  deliveries: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      currency: PropTypes.string
    }
    )
  )
}

export default CheckOut
