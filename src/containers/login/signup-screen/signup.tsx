import * as React from 'react'
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import * as screenStyles from './signup.styles'

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

  navigateTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  render() {
    const { firstname, lastname, email, password, confirmPassword } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-14.jpg')} />
        <TextInput
          style={screenStyles.textInput}
          value={firstname}
          placeholder="firstname..."
          onChangeText={firstname => this.setState({ firstname })}
        />
        <TextInput
          style={screenStyles.textInput}
          value={lastname}
          placeholder="lastname..."
          onChangeText={lastname => this.setState({ lastname })}
        />
        <TextInput
          style={screenStyles.textInput}
          value={email}
          placeholder="email..."
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={screenStyles.textInput}
          value={password}
          placeholder="password..."
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <TextInput
          style={screenStyles.textInput}
          value={confirmPassword}
          placeholder="confirm password..."
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          secureTextEntry
        />
        <TouchableOpacity style={screenStyles.textInput} onPress={() => this.navigateTo('home')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
