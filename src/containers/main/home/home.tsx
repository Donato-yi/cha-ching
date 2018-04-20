import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapisble from 'react-native-collapsible'

import * as screenStyles from './home.styles'
import { colors } from '../../../themes'

import TopArea from './home.top-area'
import CurrencySelector from './home.currency-selector'
import NumPad from './home.num-pad'
import Contacts from './home.contacts'

export interface HomeScreenProps {
  navigation: NavigationParams
}

export interface HomeScreenState {
  isBusy: boolean
  inputMode: boolean
  amountToSend: string
}

class Home extends React.Component<HomeScreenProps, HomeScreenState> {
  state = {
    isBusy: false,
    inputMode: true,
    amountToSend: '0',
  }

  navigate = (route: string) => {
    this.props.navigation.navigate(route)
  }

  onInput = (key: string) => {
    const { amountToSend } = this.state
    if (amountToSend === '0') {
      this.setState({ amountToSend: key })
    }
    this.setState({
      amountToSend: this.state.amountToSend.concat(key),
    })
  }

  switchInputMode = () => {
    this.setState({
      inputMode: !this.state.inputMode,
    })
  }

  render() {
    const { inputMode, amountToSend } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-14.jpg')} />
        <TopArea navigateTo={this.navigate} />
        <Text style={screenStyles.amountToSend}>$ {amountToSend}</Text>
        <CurrencySelector />
        <Collapisble collapsed={!inputMode}>
          <View style={screenStyles.childView}>
            <NumPad onInput={this.onInput} />
            <TouchableOpacity style={screenStyles.sendButton} onPress={this.switchInputMode}>
              <Icon name="logo-bitcoin" size={25} color={colors.white} />
              <Text style={{ color: colors.white, fontSize: 25 }}> Send </Text>
            </TouchableOpacity>
          </View>
        </Collapisble>
        <Collapisble collapsed={inputMode}>
          <View style={screenStyles.childView}>
            <Contacts />
          </View>
        </Collapisble>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
