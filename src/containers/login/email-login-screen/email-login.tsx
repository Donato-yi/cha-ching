import * as React from 'react'
import { TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native'
import { NavigationParams, NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'
import CheckBox from 'react-native-check-box'

import { Text } from '../../../components'
import TopArea from './email-login.top-area'
import * as screenStyles from './email-login.styles'

export interface SignUpScreenProps {
  navigation: NavigationParams
}

export interface SignUpScreenState {
  isBusy: boolean
  email: string
  password: string
}

class SignUp extends React.Component<SignUpScreenProps, SignUpScreenState> {
  state = {
    isBusy: false,
    email: '',
    password: '',
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
        this.props.navigation.navigate(route, { transition })
        break
      case 'back':
        this.props.navigation.goBack()
        break
      default:
        break
    }
  }

  render() {
    const { email, password, isBusy } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView
          style={screenStyles.container}
          // contentContainerStyle={screenStyles.contentContainer}
        >
          <TextField
            label="Email"
            value={email}
            onChangeText={email => this.setState({ email })}
            {...screenStyles.textInputColors}
          />
          <TextField
            label="Password"
            value={password}
            onChangeText={password => this.setState({ password })}
            {...screenStyles.textInputColors}
            secureTextEntry
          />
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('dashboardStack', 'slideToLeft')}
            disabled={isBusy}
          >
            <Text text="Log In" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
