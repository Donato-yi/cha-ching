import { StackNavigator } from 'react-navigation'

import LoginScreen from '../containers/login/login-screen'
import ChooseSignUpMethodScreen from '../containers/signup/choose-signup-method-screen'
import EmailSignUpScreen from '../containers/signup/email-signup-screen'
import EmailLoginScreen from '../containers/login/email-login-screen'
import VerifyScreen from '../containers/signup/verify-screen'
import CreateProfileScreen from '../containers/profile/create-profile-screen'

import TransitionConfiguration from './transitions'

export const AuthNavigator = StackNavigator(
  {
    login: { screen: LoginScreen },
    emailLogin: { screen: EmailLoginScreen },
    chooseMethod: { screen: ChooseSignUpMethodScreen },
    emailSignup: { screen: EmailSignUpScreen },
    verify: { screen: VerifyScreen },
    createProfile: { screen: CreateProfileScreen },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    transitionConfig: TransitionConfiguration,
  },
)

export default AuthNavigator
