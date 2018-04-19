import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import * as screenStyles from './home.styles'

import TopArea from './home.top-area'
import CurrencySelector from './home.currency-selector'
import NumPad from './home.num-pad'
import { colors } from '../../../themes'

export interface HomeScreenProps {
  navigation: NavigationParams
  status: boolean
}

export interface HomeScreenState {
  isBusy: boolean
  amountToSend: string
}

class Home extends React.Component<HomeScreenProps, HomeScreenState> {
  state = {
    isBusy: false,
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

  render() {
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-14.jpg')} />
        <TopArea navigateTo={this.navigate} />
        <Text style={screenStyles.amountToSend}>$ {this.state.amountToSend}</Text>
        <CurrencySelector />
        <NumPad onInput={this.onInput} />
        <TouchableOpacity style={screenStyles.sendButton}>
          <Icon name="logo-bitcoin" size={25} color={colors.white} />
          <Text style={{ color: colors.white, fontSize: 25 }}> Send </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  status: state.app.status,
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
