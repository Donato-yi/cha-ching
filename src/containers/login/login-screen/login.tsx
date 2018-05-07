import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'

import { Text } from '../../../components'
import TopArea from './login.top-area'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './login.styles'

export interface LoginScreenProps {
  navigation: NavigationParams
}

export interface LoginScreenState {
  isBusy: boolean
}

class Login extends React.Component<LoginScreenProps, LoginScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  navigateTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-1.jpg')} />
        <TopArea navigateTo={this.navigateTo} />
        <Image style={screenStyles.logoImg} source={require('../../../assets/logo.png')} />
        <View style={{ flex: 1 }} />
        <TouchableOpacity
          style={screenStyles.loginFacebook}
          onPress={() => this.navigateTo('transactionStack')}
        >
          <Text text="FACEBOOK LOGIN" style={screenStyles.text.facebook} />
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.loginEmail}
          onPress={() => this.navigateTo('transactionStack')}
        >
          <Text text="Log in with Email" style={screenStyles.text.email} />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
