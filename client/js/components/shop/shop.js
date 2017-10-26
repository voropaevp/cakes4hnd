import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Col, Row, Button } from 'reactstrap'
import { styles } from '../../styles'
import { animateScroll } from 'react-scroll'
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization
} from 'react-shopping-cart'
import { LOCALISATION } from '../../constants'

const {getDefaultLocalization} = cartLocalization

const cakeWithExtraCost = {
  big: 'Big (+{cost}{localizedCurrency})',
  medium: 'Medium (+{cost}{localizedCurrency})'
}

export const descNode = product => <div>
  <h3>{LOCALISATION[product.name]}</h3>
  <img className='img-fluid' src={product.imageSrc}/>
  <div>{product.license}</div>
</div>

export const scrollFunc = animateScroll.scrollToBottom

export class Shop extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      getProductLocalization:
        getDefaultLocalization(
          'product',
          'en',
          {
            ...LOCALISATION,
            ...cakeWithExtraCost
          }
        ),
      getCheckoutButtonLocalization:
        getDefaultLocalization(
          'checkoutButton',
          'en',
          LOCALISATION
        ),
      getCartLocalization:
        getDefaultLocalization(
          'cart',
          'en',
          LOCALISATION
        )
    }
  }

  render () {
    const {
      getCheckoutButtonLocalization,
      getProductLocalization,
      getCartLocalization
    } = this.state

    const checkoutButtonElement =
      <CheckoutButton
        getLocalization={getCheckoutButtonLocalization}
        checkoutURL='/checkout'
        linkComponent={() => (
          <Link to='/checkout' style={styles.shop.checkOutLink}>
            <Button color='success' size='lg' block>
              Check Out
            </Button>
          </Link>
        )}
      />

    return (
      <Row noGutters>
        {this.props.cartProducts && Object.keys(this.props.cartProducts).length !== 0 &&
        <div style={styles.shop.toCart} onClick={scrollFunc} id={'sticker'}>
          <i style={styles.shop.toCartCart} className='fa fa-shopping-cart' aria-hidden='true' />
          <i style={styles.shop.toCartShevron} className='fa fa-angle-down' aria-hidden='true' />
        </div>}
        <Row noGutters>
          {
            this.props.products.map(product => (
              <Col xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}>
                <div className='container container-fluid' style={styles.shop.product}>
                  <Product
                    {...product} checkoutButton={<div/>}
                    scrollFunction={() => {}}
                    getLocalization={getProductLocalization}
                    descriptionNode={descNode(product)}
                  />
                </div>
              </Col>
            ))
          }
        </Row>
        <Row noGutters id={'cart'}>
          <div className='container container-fluid' style={styles.shop.cart}>
            <Cart
              checkoutButton={checkoutButtonElement}
              getLocalization={getCartLocalization}
            />
          </div>
        </Row>
      </Row>
    )
  }
}

Shop.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      imageSrc: PropTypes.string.isRequired,
      currency: PropTypes.string,
      license: PropTypes.any,
      properties: PropTypes.any,
      propertiesToShowInCart: PropTypes.any
    }
    )
  ),
  cartProducts: PropTypes.any
}

export default Shop
