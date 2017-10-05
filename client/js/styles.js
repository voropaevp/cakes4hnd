import ReactFontFace from 'react-font-face'
import LillyMae from '../../server/static/assets/fonts/LillyMae-Regular.otf'

export const styles = {
  rootContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    height: '100%',
    marginLeft: '2em',
    marginRight: '2em',
    marginTop: '1em',
    marginBottom: '1em'
  },
  body: {
    background: '#e8effd',
    fontFamily: 'Roboto',
    margin: 0
  },
  nav: {
    root: {
      width: '100%',
      marginBottom: '1em'
    },
    smallLogo: {
      objectFit: 'cover'
    },
    adminLink: {
      color: 'red'
    },
    loginWrapper: {
      width: '40%'
    },
    singIn: {
      paddingRight: 0,
      input: {
        width: '100%'
      }
    },
    signUp: {
      fontWeight: 'bold'
    }
  },
  about: {
    mapContainer: {
      display: 'block',
      width: 'auto',
      height: '400px',
      margin: '2em'
    },
    map: {
      display: 'block',
      height: '100%',
      margin: '2em',
      width: 'auto'
    },
    description: {
      marginLeft: '2em'
    },
    bigLogo: {
      height: '100px',
      float: 'right',
      maxHeight: '252px',
      maxWidth: '574px'
    }
  },
  shop: {
    product: {
      margin: '2em',
      height: '100%'
    },
    productHeader: {
      fontFamily: 'LillyMae'
    },
    cart: {
      margin: '2em',
      width: '100%'
    }
  },
  signup: {
    paddingBottom: '100%'
  }
}
