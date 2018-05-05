import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'

import { Text } from '../../../components'
import TopArea from './verify-phone-number.top-area'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './verify-phone-number.styles'

export interface VerifyPhoneNumberScreenProps {
  navigation: NavigationParams
}

export interface VerifyPhoneNumberScreenState {
  isBusy: boolean
}

class VerifyPhoneNumber extends React.Component<
  VerifyPhoneNumberScreenProps,
  VerifyPhoneNumberScreenState
> {
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
          onPress={() => this.navigateTo('home')}
        >
          <Text text="FACEBOOK VerifyPhoneNumber" style={screenStyles.text.facebook} />
        </TouchableOpacity>
        <TouchableOpacity style={screenStyles.loginEmail} onPress={() => this.navigateTo('home')}>
          <Text text="Log in with Email" style={screenStyles.text.email} />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(VerifyPhoneNumber)
