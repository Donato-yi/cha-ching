import * as React from 'react'
import { TouchableOpacity, View, Image, ScrollView } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { connect } from 'react-redux'
import { merge } from 'ramda'

import { Text } from '../../../components'
import CurrencyActions from '../../../actions/currency'

import { coins, topCoins } from '../../../config/dummy'
import { COIN_INFO } from '../../../config/coins'
import { colors } from '../../../themes'

import * as screenStyles from './settings.styles'

interface CoinSelectorState {
  collapsed: boolean
  topCoins: Array<string>
  selectedCoinIndex: number
}

interface CoinSelectorProps {}

class CoinSelector extends React.PureComponent<CoinSelectorProps, CoinSelectorState> {
  state = {
    collapsed: true,
    topCoins,
    selectedCoinIndex: 0,
  }

  toggle = (index: number) => {
    this.setState({
      collapsed: false,
      selectedCoinIndex: index,
    })
  }

  selectCoin = (coin: string) => {
    const { topCoins, selectedCoinIndex } = this.state
    topCoins[selectedCoinIndex] = coin
    this.setState({
      collapsed: true,
      topCoins,
    })
  }

  render() {
    const { collapsed, topCoins, selectedCoinIndex } = this.state
    return (
      <View style={screenStyles.coinSelector.container}>
        <Text preset="secondaryMediumPlus" text="Top Coins" />
        <View style={screenStyles.coins}>
          {topCoins.map((coin, index) => (
            <View key={Math.random()} style={screenStyles.coinSelector.coinAvatarContainer}>
              <TouchableOpacity
                style={screenStyles.coinSelector.selector}
                onPress={() => this.toggle(index)}
              >
                <Image
                  style={screenStyles.coinSelector.coinAvatar}
                  source={COIN_INFO[coin].avatar}
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <Collapsible collapsed={collapsed} collapsedHeight={0}>
          <View style={screenStyles.coinSelector.container}>
            <ScrollView style={{ paddingBottom: 7 }} horizontal>
              {coins.map((coin, index) => {
                if (topCoins.indexOf(coin) < 0) {
                  return (
                    <TouchableOpacity
                      key={Math.random()}
                      style={screenStyles.coinSelector.option}
                      onPress={() => this.selectCoin(coin)}
                    >
                      <Image
                        style={screenStyles.coinSelector.coinAvatar}
                        source={COIN_INFO[coin].avatar}
                      />
                      <Text preset="primaryTiny" text={COIN_INFO[coin].name} />
                    </TouchableOpacity>
                  )
                }
                return null
              })}
            </ScrollView>
          </View>
        </Collapsible>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CoinSelector)
