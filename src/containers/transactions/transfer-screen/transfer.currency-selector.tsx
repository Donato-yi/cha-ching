import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'
import { connect } from 'react-redux'
import { merge } from 'ramda'

import CurrencyActions from '../../../actions/currency'

import * as screenStyles from './transfer.styles'
import { colors } from '../../../themes'

const currencies = [
  {
    name: 'Bitcoin',
    id: 1,
    iconName: 'logo-bitcoin',
  },
  {
    name: 'Etherum',
    id: 1,
    iconName: 'logo-bitcoin',
  },
  {
    name: 'Lightcoin',
    id: 1,
    iconName: 'logo-bitcoin',
  },
]

interface CurrencySelectorState {
  collapsed: boolean
  currency: {
    name: string
    id: string | number
    iconName: string,
  }
}

interface CurrencySelectorProps {}

class CurrencySelector extends React.PureComponent<CurrencySelectorProps, CurrencySelectorState> {
  state = {
    collapsed: true,
    currency: currencies[0],
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  setCurrency = (currency: { name: string; id: string | number; iconName: string }) => {
    this.setState({
      collapsed: true,
      currency,
    })
  }

  render() {
    const { collapsed, currency } = this.state
    return (
      <View style={screenStyles.currencySelector.container}>
        <TouchableOpacity style={screenStyles.currencySelector.selector} onPress={this.toggle}>
          <Icon name={currency.iconName} size={20} color={colors.black} />
          <Text>{currency.name}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={collapsed} collapsedHeight={0}>
          {currencies.map((currency, index) => (
            <TouchableOpacity
              key={currency.name}
              style={screenStyles.currencySelector.selector}
              onPress={() => this.setCurrency(currency)}
            >
              <Icon name={currency.iconName} size={20} color={colors.black} />
              <Text>{currency.name}</Text>
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
