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
import { Coin, coins } from '../../../config/coins'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './select-wallet.styles'

export interface SelectWalletScreenProps {
  navigation: NavigationParams
}

export interface SelectWalletScreenState {
  isBusy: boolean
  wallets: Array<Coin>
}

class SelectWalletScreen extends React.Component<SelectWalletScreenProps, SelectWalletScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      wallets: coins,
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
              <Text preset="primaryMedium" text={wallet.name} />
              <View style={screenStyles.avatar.container}>
                <Image style={screenStyles.avatar.image} source={wallet.avatar} />
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
