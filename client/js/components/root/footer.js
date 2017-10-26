import React from 'react'
import { Row, Col } from 'reactstrap'

export const Footer = () => (
  <Row noGutters style={{padding: '1em'}}>
    <Col className={'text-left'}>
      Report site issues: <a href='feedback@cakes4arden.co.uk'>feedback@cakes4arden.co.uk</a>
    </Col>
    <Col className={'text-right'}>Developed by: Pavel Voropaev</Col>
  </Row>
)

export default Footer
