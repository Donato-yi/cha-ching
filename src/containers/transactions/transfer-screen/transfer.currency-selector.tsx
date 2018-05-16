import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { connect } from 'react-redux'
import { merge } from 'ramda'

import { Text } from '../../../components'
import CurrencyActions from '../../../actions/currency'

import { coins } from '../../../config/dummy'
import { COIN_INFO } from '../../../config/coins'
import { colors } from '../../../themes'

import * as screenStyles from './transfer.styles'

interface CurrencySelectorState {
  collapsed: boolean
  selectedCoin: string
}

interface CurrencySelectorProps {}

class CurrencySelector extends React.PureComponent<CurrencySelectorProps, CurrencySelectorState> {
  state = {
    collapsed: true,
    selectedCoin: coins[0],
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  selectCoin = (coin: string) => {
    this.setState({
      collapsed: true,
      selectedCoin: coin,
    })
  }

  render() {
    const { collapsed, selectedCoin } = this.state
    return (
      <View style={screenStyles.currencySelector.container}>
        <TouchableOpacity style={screenStyles.currencySelector.selector} onPress={this.toggle}>
          <Image
            style={screenStyles.currencySelector.coinAvatar}
            source={COIN_INFO[selectedCoin].avatar}
          />
          <Text
            style={screenStyles.currencySelector.coinName}
            preset="secondarySmall"
            text={COIN_INFO[selectedCoin].name}
          />
        </TouchableOpacity>
        <Collapsible collapsed={collapsed} collapsedHeight={0}>
          {coins.map((coin, index) => (
            <TouchableOpacity
              key={Math.random()}
              style={screenStyles.currencySelector.selector}
              onPress={() => this.selectCoin(coin)}
            >
              <Image
                style={screenStyles.currencySelector.coinAvatar}
                source={COIN_INFO[coin].avatar}
              />
              <Text
                style={screenStyles.currencySelector.coinName}
                preset="secondarySmall"
                text={COIN_INFO[coin].name}
              />
            </TouchableOpacity>
          ))}
        </Collapsible>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector)
