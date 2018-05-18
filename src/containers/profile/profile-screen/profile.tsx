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

import { Text } from '../../../components'
import { topCoins } from '../../../config/dummy'
import { COIN_INFO } from '../../../config/coins'
import TopArea from './profile.top-area'
import * as screenStyles from './profile.styles'

export interface ProfileScreenProps {
  navigation: NavigationParams
}

export interface ProfileScreenState {
  isBusy: boolean
  username: string
  avatar: ImagePropertiesSourceOptions
  firstName: string
  lastName: string
  topCoins: Array<string>
}

class Profile extends React.Component<ProfileScreenProps, ProfileScreenState> {
  state = {
    isBusy: false,
    username: '@thomas_schulz',
    firstName: 'Thomas',
    lastName: 'Schulz',
    avatar: require('../../../assets/bk-1.jpg'),
    topCoins,
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
        this.props.navigation.navigate(route, { transition, from: 'profile' })
        break
      default:
        break
    }
  }

  render() {
    const { username, firstName, lastName, avatar, topCoins } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView style={screenStyles.container}>
          <View style={screenStyles.avatar.container}>
            <Image style={screenStyles.avatar.image} source={avatar} />
          </View>
          <View style={screenStyles.userNameArea}>
            <Text preset="primarySmall" text={username} />
            <Text preset="primaryMedium" text={firstName + ' ' + lastName} />
          </View>
          <View style={screenStyles.topCoins.container}>
            <Text text="Top Coins" />
            <View style={screenStyles.topCoins.coinsContainer}>
              {topCoins.map(coin => (
                <Image
                  key={Math.random()}
                  source={COIN_INFO[coin].avatar}
                  style={screenStyles.topCoins.coin}
                />
              ))}
            </View>
          </View>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('settings', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Settings" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('editProfile', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Account Settings" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('contacts', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Contacts" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('privacyAndPolicy', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Privacy" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('notifications', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Notifications" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('support', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Support" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.button}
            onPress={() => this.navigateTo('loginStack', null, 'push')}
          >
            <Text preset="secondaryRegular" text="Sign Out" />
          </TouchableOpacity>
          <View style={{ height: 30 }} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
