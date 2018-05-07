import { StackNavigator } from 'react-navigation'

import LoginScreen from '../containers/login/login-screen'
import ChooseSignUpMethodScreen from '../containers/login/choose-signup-method-screen'
import EmailSignUpScreen from '../containers/login/email-signup-screen'
import VerifyScreen from '../containers/login/verify-screen'

export const LoginNavigator = StackNavigator(
  {
    login: { screen: LoginScreen },
    chooseMethod: { screen: ChooseSignUpMethodScreen },
    emailSignup: { screen: EmailSignUpScreen },
    verify: { screen: VerifyScreen },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
)

export default LoginNavigator
