import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { styles } from '../../styles'

export const SignUp = () => (
  <Form style={styles.signUp}>
    <FormGroup>
      <Label for='exampleEmail'>Email/Login</Label>
      <Input type='email' name='email' id='exampleEmail' placeholder='your@email.com'/>
    </FormGroup>
    <FormGroup>
      <Label for='examplePassword'>Password</Label>
      <Input type='password' name='password' id='examplePassword' placeholder='password'/>
    </FormGroup>
    <FormGroup>
      <Label for='examplePassword'>Repeat Password</Label>
      <Input type='password' name='password' id='examplePassword' placeholder='password'/>
    </FormGroup>
    <FormGroup>
      <Label for='exampleText'>Address</Label>
      <Input type='textarea' name='text' id='exampleText'/>
    </FormGroup>
    <Button>Submit</Button>
  </Form>
)

export default SignUp
