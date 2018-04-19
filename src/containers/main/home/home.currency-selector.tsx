import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapsible from 'react-native-collapsible'

import { connect } from 'react-redux'
import AppActions from '../../../actions/app'

import * as screenStyles from './home.styles'
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
  isOpen: boolean
  currency: {
    name: string
    id: string | number
    iconName: string,
  }
}

interface CurrencySelectorProps {
  // setCurrentCurrency: ( currencyID: string ) => void,
}

class CurrencySelector extends React.PureComponent<CurrencySelectorProps, CurrencySelectorState> {
  state = {
    isOpen: true,
    currency: currencies[0],
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen, currency } = this.state
    return (
      <View style={screenStyles.currencySelectContainer}>
        <TouchableOpacity style={screenStyles.currencySelector} onPress={this.toggle}>
          <Icon name={currency.iconName} size={20} color={colors.black} />
          <Text>{currency.name}</Text>
        </TouchableOpacity>
        <Collapsible collapsed={isOpen} collapsedHeight={0}>
          {currencies.map((currency, index) => (
            <TouchableOpacity
              key={currency.name}
              style={screenStyles.currencyItem}
              onPress={this.toggle}
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

// const mapStateToProps = state => {
// }

// const mapDispatchToProps = dispatch => ({
//   setCurrentCurrency: ( currencyID: string ) => dispatch( AppActions.setCurrentCurrency( currencyID ) ),
// })

// export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector)

export default CurrencySelector
