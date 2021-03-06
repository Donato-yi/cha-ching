import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { NavigationParams, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'

import TopArea from './choose-signup-method.top-area'
import { Text } from '../../../components'

import * as screenStyles from './choose-signup-method.styles'
import colors from '../../../themes/colors'

export interface SignUpScreenProps {
  navigation: NavigationParams
}

export interface SignUpScreenState {
  isBusy: boolean
  firstname: string
  lastname: string
  email: string
  password: string
  confirmPassword: string
}

class SignUp extends React.Component<SignUpScreenProps, SignUpScreenState> {
  state = {
    isBusy: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  navigateTo = (route: string, transition: string = 'default', action: string = 'push') => {
    switch (action) {
      case 'push':
        this.props.navigation.push(route, { transition })
        break
      case 'pop':
        this.props.navigation.pop()
        break
      case 'navigate':
        this.props.navigation.navigate(route, { transition })
        break
      default:
        break
    }
  }

  render() {
    const { firstname, lastname, email, password, confirmPassword } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <View style={screenStyles.container}>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('verify', 'slideToLeft', 'push')}
          >
            <Icon name="facebook" size={12} color={colors.text} />
            <Text
              preset="primarySmall"
              text="Sign up with Facebook"
              style={screenStyles.buttonText}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('emailSignup', 'slideToLeft', 'push')}
          >
            <Icon name="mail" size={12} color={colors.text} />
            <Text preset="primarySmall" text="Sign up with Email" style={screenStyles.buttonText} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
