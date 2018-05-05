import { StackNavigator } from 'react-navigation'

import LoginScreen from '../containers/login/login-screen'
import SignUpScreen from '../containers/login/signup-screen'
import VerifyPhoneNumberScreen from '../containers/login/verify-phone-number-screen'

export const LoginNavigator = StackNavigator(
  {
    login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null,
      },
    },
    signup: {
      screen: SignUpScreen,
    },
    verifyPhoneNumber: {
      screen: VerifyPhoneNumberScreen,
    },
    createProfile: {
      screen: LoginScreen,
    },
  },
  {},
)

export default LoginNavigator
