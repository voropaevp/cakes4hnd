import React from 'react'
import { Helmet } from 'react-helmet'
import { Row } from 'reactstrap'
import Nav from '../../containers/root/nav'
import { styles } from '../../styles'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

export let App = ({children}) => (
  <div style={styles.body} className='application'>
    <Helmet>
      <meta charSet='utf-8'/>
      <link rel='icon' href='/assets/images/favicon.png'/>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet'/>
      <link rel='stylesheet' href='/css/cakes4arden-bundle.css'/>
      <title>Cakes For Arden</title>
    </Helmet>
    <div>
      <Row><Nav/></Row>
      <Row>{children}</Row>
    </div>
  </div>
)

export default App
