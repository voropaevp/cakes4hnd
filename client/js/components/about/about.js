import React from 'react'
import { styles } from '../../styles'
import { Col, Row } from 'reactstrap'
import { BIG_LOGO, CAKES_LOCATION, LOCATION_ZOOM, CAKES_PLACE, MARKER } from '../../constants'
import { withGoogleMap, GoogleMap, Marker, StreetViewPanorama, OverlayView } from 'react-google-maps'

const getPixelPositionOffset = (width, height) => ({
  x: -(width / 2),
  y: -(height / 2)
})

const CakeMap = withGoogleMap((props) =>
  <GoogleMap
    defaultCenter={CAKES_LOCATION}
    defaultZoom={LOCATION_ZOOM}
  >
    <Marker position={CAKES_LOCATION} name={'Cakes For Arden'} place={CAKES_PLACE}/>
  </GoogleMap>
)

const CakeStreetView = withGoogleMap(props =>
  <GoogleMap defaultZoom={LOCATION_ZOOM} defaultCenter={CAKES_LOCATION}>
    <StreetViewPanorama defaultPosition={CAKES_LOCATION} visible>
      <OverlayView
        position={CAKES_LOCATION}
        mapPaneName={OverlayView.OVERLAY_LAYER}
        getPixelPositionOffset={getPixelPositionOffset}
      >
        <img src={MARKER}/>
      </OverlayView>
    </StreetViewPanorama>
  </GoogleMap>
)

const About = () => (
  <Row>
    <Col lg={6} sm={12} >
      <h3 style={styles.about.description}>About Company:</h3>
      <img style={styles.about.bigLogo} src={BIG_LOGO}/>
      <p style={styles.about.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Col>
    <Col lg={6} sm={12} className={'mx-auto text-center'}>
      <h3>Location:</h3>
      <CakeMap
        containerElement={<div style={styles.about.mapContainer}/>}
        mapElement={<div style={styles.about.map}/>}
      />
      <h4>
        Address:
      </h4>
      <p>82 Albion St, Leeds LS1 6AD</p>
      <h4>Street View:</h4>
      <CakeStreetView
        containerElement={<div style={styles.about.mapContainer}/>}
        mapElement={<div style={styles.about.map}/>}
      />
    </Col>
    <Col sm={12}>
      <ul>
        <li>Hearts and cakes icons made by <a href='https://www.flaticon.com/authors/google'>Google</a> from
          <a href='https://www.flaticon.com/'> www.flaticon.com</a> is licensed under
          <a href='http://creativecommons.org/licenses/by/3.0/'> CC 3.0 BY</a>
        </li>
      </ul>
    </Col>
  </Row>
)

export default About
