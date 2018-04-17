import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import AppActions from '../../actions/app'
import * as screenStyles from './launch.styles'

export interface LaunchScreenProps {
  navigation: NavigationParams
  status: boolean
  loginRequest?: () => void
}

export interface LaunchScreenState {
  isBusy: boolean
}

class Launch extends React.Component<LaunchScreenProps, LaunchScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  toLogin = () => {
    this.props.navigation.navigate('login')
  }

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../assets/bk-1.jpg')} />
        <Image style={screenStyles.logoImg} source={require('../../assets/logo.png')} />
        <View style={{ flex: 1 }} />
        <TouchableOpacity style={screenStyles.loginFacebook} onPress={this.toLogin}>
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
        <TouchableOpacity style={screenStyles.loginEmail} onPress={this.toLogin}>
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

const mapStateToProps = state => ({
  status: state.app.status,
})

const mapDispatchToProps = dispatch => ({
  loginRequest: () => dispatch(AppActions.loginRequest()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Launch)
