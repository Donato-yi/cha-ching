import * as React from 'react'
import { Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import * as screenStyles from './profile.styles'

export interface ProfileScreenProps {
  navigation: NavigationParams
}

export interface ProfileScreenState {
  isBusy: boolean
  email: string
  password: string
  newPassword: string
  confirmPassword: string
}

class Profile extends React.Component<ProfileScreenProps, ProfileScreenState> {
  state = {
    isBusy: false,
    email: 'your@email.here',
    password: '',
    newPassword: '',
    confirmPassword: '',
  }

  navigateTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  render() {
    const { email, password, newPassword, confirmPassword } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../assets/bk-13.jpg')} />
        <Text style={screenStyles.email}>{email}</Text>
        <TextInput
          style={screenStyles.textInput}
          value={password}
          placeholder="current password here..."
          onChangeText={password => this.setState({ password })}
          secureTextEntry
        />
        <TextInput
          style={screenStyles.textInput}
          value={newPassword}
          placeholder="new password here..."
          onChangeText={newPassword => this.setState({ newPassword })}
          secureTextEntry
        />
        <TextInput
          style={screenStyles.textInput}
          value={confirmPassword}
          placeholder="confirm password here..."
          onChangeText={confirmPassword => this.setState({ confirmPassword })}
          secureTextEntry
        />
        <TouchableOpacity style={screenStyles.textInput} onPress={() => this.navigateTo('home')}>
          <Text>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={screenStyles.textInput}
          onPress={() => this.navigateTo('contacts')}
        >
          <Text>+ Contacts</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
