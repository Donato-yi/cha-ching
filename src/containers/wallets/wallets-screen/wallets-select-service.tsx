import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Collapsible from 'react-native-collapsible'
import { connect } from 'react-redux'
import { merge } from 'ramda'

import { Text } from '../../../components'
import CurrencyActions from '../../../actions/currencies'

import { Wallet, ExchangeService } from '../../../constants/types'
import { COIN_INFO } from '../../../constants/coins'
import { SERVICE_INFO } from '../../../constants/services'
import { services, coinToUSDConversionRate } from '../../../constants/dummy'
import { colors } from '../../../themes'

import * as screenStyles from './wallets.styles'

interface SelectServiceState {
  collapsed: boolean
  selectedService: ExchangeService
  services: Array<ExchangeService>
}

interface SelectServiceProps {}

class SelectService extends React.PureComponent<SelectServiceProps, SelectServiceState> {
  state = {
    collapsed: true,
    selectedService: {
      name: 'Total',
      wallets: [],
    },
    services,
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  selectService = (service: ExchangeService) => {
    this.setState({
      collapsed: true,
      selectedService: service,
    })
  }

  calcBalance = (): number => {
    let balance = 0
    const { selectedService, services } = this.state
    if (selectedService.name === 'Total') {
      services.forEach(service => {
        service.wallets.forEach(wallet => {
          balance += wallet.balance * coinToUSDConversionRate[wallet.coin]
        })
      })
    } else {
      selectedService.wallets.forEach(wallet => {
        balance += wallet.balance * coinToUSDConversionRate[wallet.coin]
      })
    }
    return balance
  }

  render() {
    const { collapsed, selectedService, services } = this.state
    const balance = this.calcBalance()

    return (
      <View style={screenStyles.serviceSelector.container}>
        <TouchableOpacity style={screenStyles.serviceSelector.selector} onPress={this.toggle}>
          {selectedService.name !== 'Total' && (
            <Image
              style={screenStyles.serviceSelector.coinAvatar}
              source={SERVICE_INFO[selectedService.name].avatar}
            />
          )}
          <Text
            style={screenStyles.serviceSelector.coinName}
            preset="primarySmall"
            text={selectedService.name + '   : $' + balance}
          />
        </TouchableOpacity>
        <Collapsible collapsed={collapsed} collapsedHeight={0}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={Math.random()}
              style={screenStyles.serviceSelector.selector}
              onPress={() => this.selectService(service)}
            >
              <Image
                style={screenStyles.serviceSelector.coinAvatar}
                source={SERVICE_INFO[service.name].avatar}
              />
              <Text
                style={screenStyles.serviceSelector.coinName}
                preset="primarySmall"
                text={service.name + '   : $' + balance}
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectService)
