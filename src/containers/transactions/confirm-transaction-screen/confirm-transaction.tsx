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

import TopArea from './confirm-transaction.top-area'
import { Text } from '../../../components'
import { wallets } from '../../../config/dummy'
import { COIN_INFO } from '../../../config/coins'
import { Wallet } from '../../../config/types'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './confirm-transaction.styles'

export interface ConfirmTransactionScreenProps {
  navigation: NavigationParams
}

export interface ConfirmTransactionScreenState {
  isBusy: boolean
  username: string
  avatar: ImagePropertiesSourceOptions
  wallet: Wallet
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
}

class ConfirmTransactionScreen extends React.Component<
  ConfirmTransactionScreenProps,
  ConfirmTransactionScreenState
> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      username: '@username',
      firstName: 'Thomas',
      lastName: 'Schulz',
      avatar: require('../../../assets/bk-14.jpg'),
      wallet: wallets[0],
      email: 'c6schulz@gmail.com',
      phoneNumber: '123456789123',
    }
  }

  navigateTo = (route: string) => {
    if (route === 'back') {
      this.props.navigation.pop()
    } else {
      this.props.navigation.navigate(route)
    }
  }

  render() {
    const { username, firstName, lastName, avatar, email, phoneNumber, wallet } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView style={screenStyles.container}>
          <View style={screenStyles.avatars}>
            <View style={screenStyles.avatar.container}>
              <Image style={screenStyles.avatar.image} source={avatar} />
            </View>
            <View style={screenStyles.avatar.container}>
              <Image style={screenStyles.avatar.image} source={COIN_INFO[wallet.coin].avatar} />
            </View>
          </View>
          <View style={screenStyles.infoArea}>
            <Text preset="primaryMedium" text={username} />
            <Text preset="primaryLarge" text={firstName + ' ' + lastName} />
          </View>
          <TouchableOpacity
            style={screenStyles.sendButton}
            onPress={() => this.navigateTo('transfer')}
          >
            <Text preset="primaryMedium" text={email} />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.sendButton}
            onPress={() => this.navigateTo('transfer')}
          >
            <Text preset="primaryMedium" text="Facebook" />
          </TouchableOpacity>
          <TouchableOpacity
            style={screenStyles.sendButton}
            onPress={() => this.navigateTo('transfer')}
          >
            <Text preset="primaryMedium" text="via Phone" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmTransactionScreen)
