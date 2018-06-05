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

import TopArea from './select-wallet.top-area'
import { Text } from '../../../components'
import { COIN_INFO } from '../../../constants/coins'
import { wallets } from '../../../constants/dummy'
import { Wallet } from '../../../constants/types'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './select-wallet.styles'

export interface SelectWalletScreenProps {
  navigation: NavigationParams
}

export interface SelectWalletScreenState {
  isBusy: boolean
  wallets: Array<Wallet>
}

class SelectWalletScreen extends React.Component<SelectWalletScreenProps, SelectWalletScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      wallets,
    }
  }

  navigateTo = (route: string, transition = 'slideToLeft') => {
    if (route === 'back') {
      this.props.navigation.pop()
    } else {
      this.props.navigation.navigate(route, { transition })
    }
  }

  render() {
    const { wallets } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView style={screenStyles.container}>
          {wallets.map(wallet => (
            <TouchableOpacity
              key={Math.random()}
              style={screenStyles.sendButton}
              onPress={() => this.navigateTo('confirmTransaction')}
            >
              <Text preset="primaryMedium" text={COIN_INFO[wallet.coin].name} />
              <View style={screenStyles.avatar.container}>
                <Image style={screenStyles.avatar.image} source={COIN_INFO[wallet.coin].avatar} />
              </View>
            </TouchableOpacity>
          ))}
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectWalletScreen)
