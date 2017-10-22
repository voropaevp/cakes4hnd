import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Col, Row, Button } from 'reactstrap'
import { styles } from '../../styles'
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

const descNode = product => <div>
  <h3>{LOCALISATION[product.name]}</h3>
  <img className='img-fluid' src={product.imageSrc}/>
  <div>{product.license}</div>
</div>

class Shop extends PureComponent {
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
      <Row style={styles.row} noGutters>
        <Row style={styles.row}noGutters>
          {
            this.props.products.map(product => (
              <Col xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}>
                <div className='container container-fluid' style={styles.shop.product}>
                  <Product
                    {...product} checkoutButton={<div/>}
                    getLocalization={getProductLocalization}
                    descriptionNode={descNode(product)}
                  />
                </div>
              </Col>
            ))
          }
        </Row>
        <Row noGutters style={{...styles.row, ...styles.shop.cart}}>
          <Cart
            checkoutButton={checkoutButtonElement}
            getLocalization={getCartLocalization}
          />
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
  )
}

export default Shop
