import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import AuthActions from '../../actions/auth'
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

  toMain = () => {
    this.props.navigation.navigate('home')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../assets/bk-1.jpg')} />
        <Image style={screenStyles.logoImg} source={require('../../assets/logo.png')} />
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={screenStyles.loginFacebook} onPress={this.toMain}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '800',
            }}
          >
            FACEBOOK LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={screenStyles.loginEmail} onPress={this.toMain}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 12,
              textDecorationLine: 'underline',
            }}
          >
            Log in with Email
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
