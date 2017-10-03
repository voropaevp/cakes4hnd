import React, { PureComponent } from 'react'
import {
  Cart,
  Product,
  CheckoutButton,
  cartLocalization
} from 'react-shopping-cart'

const {getDefaultLocalization} = cartLocalization

// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const cakeLocalisation = {
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

class Shop extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      product: {
        name: 'Bath Cake',
        id: 'bath-cake',
        path: '/shop',
        properties: {
          size: [
            'small',
            {
              additionalCost: {
                GBP: 2,
                EUR: 4,
                USD: 7
              },
              value: 'big'
            },
            {
              additionalCost: {
                GBP: 1,
                EUR: 2,
                USD: 3.50
              },
              value: 'medium'
            }]
        },
        propertiesToShowInCart: ['size'],
        prices: {GBP: 70, EUR: 80, USD: 90},
        currency: 'GBP',
        imageSrc: '/assets/images/cakes/bath_cake_no2.jpg'
      },
      getProductLocalization:
        getDefaultLocalization(
          'product',
          'en',
          {
            ...cakeLocalisation,
            ...cakeWithExtraCost
          }
        ),
      getCheckoutButtonLocalization:
        getDefaultLocalization(
          'checkoutButton',
          'en',
          cakeLocalisation
        ),
      getCartLocalization:
        getDefaultLocalization(
          'cart',
          'en',
          cakeLocalisation
        )
    }
  }

  render () {
    const {
      product,
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
      <div className='container'>
        <Product
          {...product}
          checkoutButton={checkoutButtonElement}
          getLocalization={getProductLocalization}
        />
        <Cart
          checkoutButton={checkoutButtonElement}
          getLocalization={getCartLocalization}
        />
      </div>
    )
  }
}

export default Shop
