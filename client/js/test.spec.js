import CheckOut from './components/checkout/checkOut'
import React from 'react'
import { Button, Modal } from 'reactstrap'
import { configure, mount, shallow, render } from 'enzyme'
import { Provider } from 'react-redux'
import Adapter from 'enzyme-adapter-react-15'
import configureStore from './store'
import { animateScroll } from 'react-scroll'
import { rootReducer } from './reducers/root'
import { initialState } from './reducers/shop'
import { About, CakeStreetView } from './components/about/about'
import { Shop, descNode, scrollFunc } from './components/shop/shop'

configure({adapter: new Adapter()})
let store
let wrapper

describe('Meet appropriate design guidelines for accessible websites.', () => {
  beforeEach(() => {
    store = configureStore(rootReducer)
    wrapper = mount(
      <Provider store={store}>
        <CheckOut
          deliveries={initialState.deliveries}
          cartProducts={initialState.products}
          addToCart={() => {}}
          removeFromCart={() => {}}
        />
      </Provider>)
  })
  describe('adapts to different screen sizes', () => {
    it('Shopping cart occupy full screen width, when screen size is 500px', () => {
      expect(wrapper.first('#shopping-cart').first().html()).toMatch(/col-sm-12/)
    })
    it('Shopping cart occupy two thirds of the screen width, when screen size is 1300px', () => {
      expect(wrapper.find('#shopping-cart').first().html()).toMatch(/col-xl-8/)
    })
  })
})
describe('Have appropriate photographs for this shop, which you may obtain from on-line sources such as Google' +
  ' Images and must be referenced.', () => {
  it('Google Street View is even better!', () => {
    wrapper = shallow(<About/>)
    expect(wrapper.find(CakeStreetView).exists()).toBe(true)
  })
})

describe('Have a working catalogue with a sample of at least 10 items of appropriate stock items.', () => {
  it('Shop mounts successfully', () => {
    store = configureStore(rootReducer)
    wrapper = render(
      <Provider store={store}>
        <Shop products={initialState.products} cartProducts={initialState.products}/>
      </Provider>)
  })
  it('It has more than 10 items', () => {
    expect(Object.keys(initialState.products).length > 10).toBe(true)
  })
})
describe('This must include at least a photograph, description, price and shipping cost for each item. The factual ' +
  'content of this may be taken from on-line sources but you must construct the catalogue yourself.', () => {
  it('Photograph is included ', () => {
    wrapper = shallow(descNode(initialState.products[0]))
    expect(wrapper.find('img').exists()).toBe(true)
  })
  it('Description is included ', () => {
    wrapper = shallow(descNode(initialState.products[0]))
    expect(wrapper.find('div').exists()).toBe(true)
  })
  it('Price is included ', () => {
    store = configureStore(rootReducer)
    wrapper = render(
      <Provider store={store}>
        <Shop products={initialState.products}/>
      </Provider>)
    expect(wrapper.html()).toMatch(/Price/)
  })
  it('Shipping cost is given during check out', () => {
    wrapper = shallow(<CheckOut
      deliveries={initialState.deliveries}
      cartProducts={initialState.products}
      addToCart={() => {}}
      removeFromCart={() => {}}
    />)
    expect(wrapper.debug()).toMatch(/Delivery Method/)
  })
})
describe('Allow the customer to order from the stock list by selecting “Buy Now” buttons or similar. This should' +
  ' produce a suitable on screen message accepting the order and having a link back to continue shopping.', () => {
  it('Non empty cart will show sticker', () => {
    wrapper = shallow(<Shop products={initialState.products} />)
    expect(wrapper.find('#sticker').exists()).toBe(false)
    wrapper.setProps({
      cartProducts: initialState.products,
      products: initialState.products
    })
    expect(wrapper.find('#sticker').exists()).toBe(true)
  })
  it('that will scroll all to the shopping cart', () => {
    expect(scrollFunc.toString() === animateScroll.scrollToBottom.toString()).toBe(true)
  })

})
describe('You do NOT need to implement a checkout or payment system. Instead, put a “Pay Now” button in an' +
  ' appropriate place and when clicked, go to a page saying “Thank you for your payment”.', () => {
  beforeEach(() => {
    wrapper = shallow(<CheckOut
      deliveries={initialState.deliveries}
      cartProducts={initialState.products}
      addToCart={() => {}}
      removeFromCart={() => {}}
    />)
  })
  it('Modul is shown when check out is clicked', () => {
    wrapper.find(Button).simulate('click', {preventDefault () {}})
    expect(wrapper.find(Modal).prop('isOpen')).toBe(true)
  })
  it('Modul should not be open initally', () => {
    expect(wrapper.find(Modal).prop('isOpen')).toBe(false)
  })
})
