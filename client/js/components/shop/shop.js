import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'
import { styles } from '../../styles'
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization
} from 'react-shopping-cart'

const {getDefaultLocalization} = cartLocalization

const localisation = {
  bathCake: 'Bath Cake',
  strawberryCake: 'Strawberry Cake',
  cheesecake: 'Cheesecake',
  japaneseCake: 'Japanese Cake',
  tiramisu: 'Tiramisu',
  tinkerbellBirthdayCake: 'Tinkerbell Birthday Cake',
  twilightCake: 'Twilight Cake',
  miniXmasCake: 'Mini Xmas Cakes',
  monsterBookCake: 'Monster Book of Monsters Cake',
  frozenChocGranolaCreamCake: 'Frozen Granola Cream Cake',
  chocoCake: 'Chocolate Cake',
  size: 'Size',
  small: 'Small',
  big: 'Big',
  medium: 'Medium',
  GBP: '£',
  EUR: '€',
  USD: '$'
}

const cakeWithExtraCost = {
  big: 'Big (+{cost}{localizedCurrency})',
  medium: 'Medium (+{cost}{localizedCurrency})'
}

const descNode = product => <div>
  <h3 style={styles.shop.productHeader}>{localisation[product.name]}</h3>
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
            ...localisation,
            ...cakeWithExtraCost
          }
        ),
      getCheckoutButtonLocalization:
        getDefaultLocalization(
          'checkoutButton',
          'en',
          localisation
        ),
      getCartLocalization:
        getDefaultLocalization(
          'cart',
          'en',
          localisation
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
      />
    return (
      <Row noGutters>
        <Row noGutters>
          {
            this.props.products.map(product => (
              <Col xs={12} sm={6} md={4} lg={4} xl={3} key={product.id}>
                <div className='container container-fluid' style={styles.shop.product}>
                  <Product
                    {...product} checkoutButton={<div></div>}
                    getLocalization={getProductLocalization}
                    descriptionNode={descNode(product)}
                  />
                </div>
              </Col>
            ))
          }
        </Row>
        <Row noGutters style={styles.shop.cart}>
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
