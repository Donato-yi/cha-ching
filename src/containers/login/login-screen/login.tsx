import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'

import { Text } from '../../../components'
import FBLoginButton from '../../../components/facebook-button'
import TopArea from './login.top-area'

import { loginWithFacebook } from '../login.actions'
import { logout } from '../../settings/settings.actions'

import FBManager from '../../../services/facebook'

import * as screenStyles from './login.styles'

export interface LoginScreenProps {
  navigation: NavigationParams
  loginWithFacebook: (email: string) => void
  logout: () => void
}

export interface LoginScreenState {
  isBusy: boolean
}

class Login extends React.PureComponent<LoginScreenProps, LoginScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  navigateTo = (route: string, transition: string = 'default', action: string = 'navigate') => {
    switch (action) {
      case 'push':
        this.props.navigation.push(route, { transition })
        break
      case 'pop':
        this.props.navigation.pop()
        break
      case 'navigate':
        this.props.navigation.navigate(route)
        break
      case 'back':
        this.props.navigation.pop()
        break
      default:
        break
    }
  }

  onLoginFinished = () => {
    this.props.loginWithFacebook(FBManager.email)
  }

  onLogoutFinished = () => {
    this.props.logout()
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-1.jpg')} />
        <TopArea navigateTo={this.navigateTo} />
        <Image style={screenStyles.logoImg} source={require('../../../assets/logo.png')} />
        <View style={{ flex: 1 }} />
        <FBLoginButton
          onLoginFinished={this.onLoginFinished}
          onLogoutFinished={this.onLogoutFinished}
        />
        <TouchableOpacity
          style={screenStyles.loginEmail}
          onPress={() => this.navigateTo('emailLogin', 'slideToLeft', 'push')}
        >
          <Text text="Log in with Email" style={screenStyles.text.email} />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      loginWithFacebook,
      logout,
    },
    dispatch,
  )

export default connect(mapStateToProps, mapDispatchToProps)(Login)
