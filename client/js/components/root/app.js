import React from 'react'
import { Helmet } from 'react-helmet'
import { Row } from 'reactstrap'
import Nav from '../../containers/root/nav'
import { styles } from '../../styles'
import { FAVICON } from '../../constants'
import 'bootstrap/dist/css/bootstrap.css'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

export let App = ({children}) => (
  <div style={styles.body} className='application'>
    <Helmet>
      <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1.0'/>
      <link rel='shortcut icon' href={FAVICON} type='image/x-icon'/>
      <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' rel='stylesheet'/>
      <link rel='stylesheet' href='/assets/css/cakes4arden-bundle.css'/>
      <title>Cakes For Arden</title>
    </Helmet>
    <div className='d-flex flex-column '>
      <div>
        <Row noGutters><Nav/></Row>
      </div>
      <div>
        <Row noGutters style={styles.content}>{children}</Row>
      </div>
    </div>
  </div>
)

export default App
