import * as React from 'react'
import { TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import { from, ImmutableArray } from 'seamless-immutable'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

import { Text } from '../../components'

import * as screenStyles from './wallets.styles'
import { colors } from '../../themes'

export interface walletsScreenProps {
  navigation: NavigationParams
}

export interface walletsScreenState {
  isBusy: boolean
  collapsed: boolean
  wallet: string
  wallets: Array<string>
}

class wallets extends React.Component<walletsScreenProps, walletsScreenState> {
  state = {
    isBusy: false,
    collapsed: true,
    wallet: 'Bitcoin',
    wallets: [
      'BitCoin',
      'Etherum',
      'LightCoin',
      'Zcash',
      'Dash',
      'Ripple',
      'BitCoin',
      'Etherum',
      'LightCoin',
      'Zcash',
      'Dash',
      'Ripple',
      'Zcash',
      'Dash',
      'Ripple',
      'LightCoin',
      'Zcash',
      'Dash',
      'Ripple',
      'Zcash',
      'Dash',
      'Ripple',
      'BitCoin',
      'Etherum',
      'LightCoin',
      'Zcash',
    ],
  }

  navigateTo = (route: string) => {
    this.props.navigation.nativage(route)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  setWallet = (wallet: string) => {
    this.setState({
      wallet,
      collapsed: true,
    })
  }

  render() {
    const { wallet, wallets, collapsed } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <View style={screenStyles.overlay}>
          <ScrollView style={screenStyles.container}>
            <TouchableOpacity style={screenStyles.wallet} onPress={this.toggle}>
              <Icon name="logo-bitcoin" size={15} color={colors.blue} />
              <Text preset="secondaryMedium" text={wallet} style={{ color: colors.blue }} />
            </TouchableOpacity>
            <Collapsible collapsed={collapsed}>
              {wallets.map(wallet => (
                <TouchableOpacity
                  key={Math.random()}
                  style={screenStyles.wallet}
                  onPress={() => this.setWallet(wallet)}
                >
                  <Icon name="logo-bitcoin" size={15} color={colors.blue} />
                  <Text preset="secondaryMedium" text={wallet} style={{ color: colors.blue }} />
                </TouchableOpacity>
              ))}
            </Collapsible>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(wallets)
