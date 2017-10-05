import { connect } from 'react-redux'
import SignInForm from '../../../components/root/forms/signIn'

// real fetch token should be implemented

const SignIn = connect(state => ({isFetching: state.Auth.isFetching}), {fetchToken: () => {}})(SignInForm)
export default SignIn
