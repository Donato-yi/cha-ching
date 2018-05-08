import * as React from 'react'
import { TouchableOpacity, View, Image, TextInput, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'
import CheckBox from 'react-native-check-box'

import { Text } from '../../../components'
import TopArea from './email-signup.top-area'
import * as screenStyles from './email-signup.styles'

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
  hasAgreedPrivacy: boolean
}

class SignUp extends React.Component<SignUpScreenProps, SignUpScreenState> {
  state = {
    isBusy: false,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    hasAgreedPrivacy: false,
  }

  navigateTo = (route: string) => {
    if (route === 'back') {
      this.props.navigation.goBack()
    } else {
      this.props.navigation.navigate(route)
    }
  }

  render() {
    const { firstname, lastname, email, password, confirmPassword, hasAgreedPrivacy } = this.state
    return (
      <View style={screenStyles.ROOT}>
        {/* <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-14.jpg')} /> */}
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView
          style={screenStyles.container}
          contentContainerStyle={screenStyles.contentContainer}
        >
          <TextField
            label="First Name"
            value={firstname}
            onChangeText={firstname => this.setState({ firstname })}
            {...screenStyles.textInputColors}
          />
          <TextField
            label="Last Name"
            value={lastname}
            onChangeText={lastname => this.setState({ lastname })}
            {...screenStyles.textInputColors}
          />
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
          <TextField
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            {...screenStyles.textInputColors}
            secureTextEntry
          />
          <TouchableOpacity
            style={screenStyles.sendButton}
            onPress={() => this.navigateTo('verify')}
            disabled={!hasAgreedPrivacy}
          >
            <Text text="Sign Up" />
          </TouchableOpacity>
          <View style={screenStyles.checkButton}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox
                checkBoxColor="rgba(255,255,255,0.87)"
                isChecked={hasAgreedPrivacy}
                onClick={() => this.setState({ hasAgreedPrivacy: !hasAgreedPrivacy })}
              />
              <Text preset="secondaryTiny" text="Privacy and Policy" />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
