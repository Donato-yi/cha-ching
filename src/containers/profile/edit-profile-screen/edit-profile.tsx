import * as React from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  ImagePropertiesSourceOptions,
} from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'
import { showImagePicker } from 'react-native-image-picker'

import { Text } from '../../../components'
import TopArea from './edit-profile.top-area'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './edit-profile.styles'

const ImagePickerOptions = {
  title: 'Select Profile Image',
  // customButtons: [
  //   {
  //     name: 'fb',
  //     title: 'Choose Photo from Facebook'
  //   }
  // ]
}

export interface EditProfileScreenProps {
  navigation: NavigationParams
}

export interface EditProfileScreenState {
  isBusy: boolean
  username: string
  avatar: ImagePropertiesSourceOptions
  firstName: string
  lastName: string
  address: string
}

class EditProfileScreen extends React.Component<EditProfileScreenProps, EditProfileScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      username: '@username',
      firstName: 'Thomas',
      lastName: 'Schulz',
      avatar: require('../../../assets/bk-14.jpg'),
      address: '',
    }
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
    const { username, firstName, lastName, avatar, address } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView style={screenStyles.container}>
          <TouchableOpacity style={screenStyles.avatar.container} onPress={this.selectAvatar}>
            <Image style={screenStyles.avatar.image} source={avatar} />
          </TouchableOpacity>
          <TextField
            label="First Name"
            value={firstName}
            onChangeText={firstName => this.setState({ firstName })}
            {...screenStyles.textInputColors}
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChangeText={lastName => this.setState({ lastName })}
            {...screenStyles.textInputColors}
          />
          <TextField
            label="User Name"
            value={username}
            onChangeText={username => this.setState({ username })}
            {...screenStyles.textInputColors}
          />
          <TextField
            label="Address"
            value={address}
            onChangeText={address => this.setState({ address })}
            {...screenStyles.textInputColors}
          />
          <TouchableOpacity
            style={screenStyles.inviteButton}
            onPress={() => this.navigateTo('profile', null, 'navigate')}
          >
            <Text preset="primaryMedium" text="Update Profile" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(EditProfileScreen)
