import ReactFontFace from 'react-font-face'
import LillyMae from '../../server/static/assets/fonts/LillyMae-Regular.otf'

export const styles = {
  content: {
    marginTop: '2em'
  },
  signUp: {
    marginLeft: '1em'
  },
  body: {
    minHeight: '100vh',
    background: '#e8effd',
    fontFamily: 'Roboto',
    margin: 0
  },
  nav: {
    root: {
      width: '100%',
      marginBottom: '1em'
    },
    checkOut: {
      color: 'green'
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
      paddingRight: 0
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
      height: '100%'
    },
    toCart: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      bottom: '0vh',
      borderRadius: '50%',
      right: '0vh',
      background: 'white',
      height: '2em',
      border: 'solid 1px yellowgreen',
      width: '2em',
      color: 'green',
      margin: '2em',
      fontSize: '3em',
      zIndex: '10',
      textAlign: 'center'
    },
    toCartShevron: {
      marginTop: '-0.3em'
    },
    toCartCart: {
      marginTop: '0.5em',
      fontSize: '1em'
    },
    checkOutLink: {
      boxSizing: 'content-box',
      textDecoration: 'none',
      color: 'white',
      width: '80%'
    },
    cart: {
      width: '80%'
    }
  },
  checkOut: {
    marginLeft: '1em',
    width: '100%'
  },
  notFound: {
    height: '100%',
    width: '100%'
  }
}
