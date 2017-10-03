import { connect } from 'react-redux'
import SignInForm from '../../../components/root/forms/signIn'
import {fetchToken} from '../../../actions/auth/auth'

const SignIn = connect(state => ({isFetching: state.Auth.isFetching}), {fetchToken})(SignInForm)
export default SignIn
