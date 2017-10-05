import React from 'react';

export const initialState = {
  products: [
    {
      name: 'bathCake',
      id: 'bath-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/elizabethstevens33/3719742195/'>bath cake no.2</a> by
        <a href='https://www.flickr.com/photos/elizabethstevens33/'> liz stevens</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      tags: ['birthday'],
      propertiesToShowInCart: ['size'],
      prices: {GBP: 10, EUR: 20, USD: 30},
      currency: 'GBP',
      imageSrc: '/assets/images/cakes/bath_cake_no2.jpg'
    },
    {
      name: 'miniXmasCake',
      id: 'mini-xmas-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/7906101@N03/5156200732/'>Mini christmas cakes</a> by
        <a href='https://www.flickr.com/photos/7906101@N03/'> Samantha Oliver</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/mini_xmas_cakes.jpg'
    },
    {
      name: 'frozenChocGranolaCreamCake',
      id: 'frozen-choc-granola-cream',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/bettycrockerrecipes/5860557447/'>Frozen Chocolate Granola Cream
        Cake
        Recipe</a> by
        <a href='https://www.flickr.com/photos/bettycrockerrecipes/'> Betty Crocker Recipes</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a
        ></p>,
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
      imageSrc: '/assets/images/cakes/frozen_choc_granola_cream.jpg'
    },
    {
      name: 'tiramisu',
      id: 'tiramisu',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/158295424@N02/36826241070/'>Tiramisu</a> by
        <a href='https://www.flickr.com/photos/158295424@N02/'>Amelia DoesDinner</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/tiramisu.jpg'
    },
    {
      name: 'tinkerbellBirthdayCake',
      id: 'tinkerbell-birthday-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/114522579@N03/16642380369/'>Tinkerbell birthday cake
        recipe </a>
        by<a href='https://www.flickr.com/photos/114522579@N03/'> Aladden Sima</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/tinkerbell_birthday_cake.jpg'
    },
    {
      name: 'monsterBookCake',
      id: 'monster-book-cake',
      path: '/shop',
      license: <p>
        <a href='https://www.flickr.com/photos/elizabethstevens33/5860169705/'>The monster Book of Monsters</a> by
        <a href='https://www.flickr.com/photos/elizabethstevens33/'> liz stevens</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/monster_book.jpg'
    },
    {
      name: 'twilightCake',
      id: 'twilight-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/elizabethstevens33/4796231409/'>twlight inspired cake</a> by by
        <a href='https://www.flickr.com/photos/elizabethstevens33/'> liz stevens</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/twilight_cake.jpg'
    },
    {
      name: 'chocoCake',
      id: 'choco-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/leannedesmond/5907194986/'>Cake</a> by
        <a href='https://www.flickr.com/photos/leannedesmond/'> Leanne Desmond</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/choco_cake.jpg'
    },
    {
      name: 'japaneseCake',
      id: 'japanese-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/tuppen2007/3424120255/'>Japanese cake</a> by
        <a href='https://www.flickr.com/photos/tuppen2007/'> tuppen2007</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/jap_cake.jpg'
    },
    {
      name: 'strawberryCake',
      id: 'strawberry-cake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/wannabecakediva/2744220245/'>Strawberry
        Cake</a> by <a href='https://www.flickr.com/photos/wannabecakediva/'>wannabecakediva</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'>CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/strawberry_cake.jpg'
    },
    {
      name: 'cheesecake',
      id: 'cheesecake',
      path: '/shop',
      license: <p><a href='https://www.flickr.com/photos/prasanthirelangi/6497587667/'>Strawberry cheese cake</a> by
        <a href='https://www.flickr.com/photos/prasanthirelangi/'> prasanthi.relangi</a> is licensed under
        <a href='https://creativecommons.org/licenses/by/2.0/'> CC BY 2.0</a></p>,
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
      imageSrc: '/assets/images/cakes/cheesecake.jpg'
    }
  ]

}

function Shop (state = initialState, action) {
  switch (action.type) {
    // Catalog management actions go here.
    default:
      return state
  }
}

export default Shop
