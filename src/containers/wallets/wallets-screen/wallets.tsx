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

import TopArea from './wallets.top-area'
import SelectService from './wallets-select-service'
import WalletCell from './wallets-wallet'
import { Text } from '../../../components'
import { wallets } from '../../../config/dummy'
import { Wallet } from '../../../config/types'
import AuthActions from '../../../actions/auth'
import * as screenStyles from './wallets.styles'

export interface WalletsScreenProps {
  navigation: NavigationParams
}

export interface WalletsScreenState {
  isBusy: boolean
  wallets: Array<Wallet>
}

class WalletsScreen extends React.Component<WalletsScreenProps, WalletsScreenState> {
  constructor(props) {
    super(props)
    this.state = {
      isBusy: false,
      wallets,
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
        <SelectService />
        <Text text="Holdings" />
        <ScrollView style={screenStyles.container}>
          {wallets.map(wallet => (
            <WalletCell key={Math.random()} wallet={wallet} navigateTo={this.navigateTo} />
          ))}
          <View style={{ height: 50 }} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(WalletsScreen)
