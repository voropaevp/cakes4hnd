import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '../../../styles'
import { Form, FormGroup, Input, Button, Col, FormFeedback, Row } from 'reactstrap'

class SignInForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.password = null
    this.username = null
  }

  handleChange (field) {
    return e => {
      let value = e.target.value
      this.setState({[field]: value})
    }
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.fetchToken({
      username: this.username,
      password: this.password
    })
  }

  render () {
    return (
      <Form inline id='signIn' className='navbar-form' onSubmit={this.handleSubmit}>
        <Row noGutters>
          <Col sm={4} style={styles.nav.singIn}>
            <FormGroup color={this.props.error && 'danger'}>
              <Input
                style={styles.nav.singIn.input}
                onChange={this.handleChange('username')}
                type='text'
                placeholder='login'
              />
            </FormGroup>
          </Col>
          <Col sm={4} style={styles.nav.singIn}>
            <FormGroup color={this.props.error && 'danger'}>
              <Input
                style={styles.nav.singIn.input}
                onChange={this.handleChange('password')}
                type='text'
                placeholder='password'
              />
              {this.props.error && <FormFeedback>{this.props.error}</FormFeedback>}
            </FormGroup>
          </Col>
          <Col sm={2} style={styles.nav.singIn}>
            <Button type='submit' disabled={!this.props.isFetching}>Sign In</Button>
          </Col>
        </Row>
      </Form>
    )
  }
}

SignInForm.propTypes = {
  fetchToken: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default SignInForm
