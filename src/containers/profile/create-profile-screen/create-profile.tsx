import * as React from 'react'
import {
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ImagePropertiesSourceOptions,
} from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'
import { showImagePicker } from 'react-native-image-picker'

import { Text } from '../../../components'
import * as screenStyles from './create-profile.styles'

const ImagePickerOptions = {
  title: 'Select Profile Image',
  // customButtons: [
  //   {
  //     name: 'fb',
  //     title: 'Choose Photo from Facebook'
  //   }
  // ]
}

export interface ProfileScreenProps {
  navigation: NavigationParams
}

export interface ProfileScreenState {
  isBusy: boolean
  username: string
  avatar: ImagePropertiesSourceOptions
  email: string
}

class Profile extends React.Component<ProfileScreenProps, ProfileScreenState> {
  state = {
    isBusy: false,
    username: '',
    email: '',
    avatar: require('../../../assets/bk-14.jpg'),
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
        this.props.navigation.navigate(route, { transition, from: 'sign-up' })
        break
      default:
        break
    }
  }

  selectAvatar = () => {
    showImagePicker(ImagePickerOptions, response => {
      if (response.didCancel) {
        return
      }
      if (response.error) {
        return
      }
      if (response.customButton) {
        return
      }
      this.setState({
        avatar: { uri: response.uri },
      })
    })
  }

  render() {
    const { email, username, avatar } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <ScrollView style={screenStyles.container}>
          <TouchableOpacity style={screenStyles.avatar.container} onPress={this.selectAvatar}>
            <Image style={screenStyles.avatar.image} source={avatar} />
          </TouchableOpacity>
          <TextField
            label="User Name"
            value={username}
            onChangeText={username => this.setState({ username })}
            {...screenStyles.textInputColors}
          />
          <TextField
            label="Facebook Email"
            value={email}
            onChangeText={email => this.setState({ email })}
            {...screenStyles.textInputColors}
          />
          <TouchableOpacity
            style={screenStyles.nextButton}
            onPress={() => this.navigateTo('connectContacts', 'slideToLeft', 'navigate')}
          >
            <Text text="Next" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
