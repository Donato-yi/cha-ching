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

import { Text } from '../../../components'
import TopArea from './invite-friend.top-area'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './invite-friend.styles'

export interface InviteFriendScreenProps {
  navigation: NavigationParams
}

export interface InviteFriendScreenState {
  isBusy: boolean
  username: string
  avatar: ImagePropertiesSourceOptions
  firstName: string
  lastName: string
}

class InviteFriendScreen extends React.Component<InviteFriendScreenProps, InviteFriendScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      username: '@username',
      firstName: 'Thomas',
      lastName: 'Schulz',
      avatar: require('../../../assets/bk-14.jpg'),
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

  render() {
    const { username, firstName, lastName, avatar } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView style={screenStyles.container}>
          <View style={screenStyles.avatar.container}>
            <Image style={screenStyles.avatar.image} source={avatar} />
          </View>
          <Text preset="primaryMedium" text={username} />
          <Text preset="primaryLarge" text={firstName + ' ' + lastName} />
          <TouchableOpacity
            style={screenStyles.inviteButton}
            onPress={() => this.navigateTo(null, null, 'pop')}
          >
            <Text preset="primaryMedium" text="Invite" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(InviteFriendScreen)
