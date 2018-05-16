import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapisble from 'react-native-collapsible'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import * as screenStyles from './transfer.styles'
import { colors } from '../../../themes'

import { Text } from '../../../components'
import TopArea from './transfer.top-area'
import CurrencySelector from './transfer.currency-selector'
import NumPad from './transfer.num-pad'
import Contacts from './transfer.contacts'

export interface TransferScreenProps {
  navigation: NavigationParams
}

export interface TransferScreenState {
  isBusy: boolean
  viewIndex: number
  amountToSend: string
  searchText: string
}

class Transfer extends React.Component<TransferScreenProps, TransferScreenState> {
  state = {
    isBusy: false,
    viewIndex: 0,
    amountToSend: '0',
    searchText: '',
  }

  navigateTo = (route: string, transition = 'default') => {
    this.props.navigation.navigate(route, { transition })
  }

  onKeyInput = (key: string) => {
    const { amountToSend } = this.state
    if (key === 'X') {
      const newAmount = amountToSend.substring(0, amountToSend.length - 1)
      if (newAmount.length == 0) {
        this.setState({ amountToSend: '0' })
      } else {
        this.setState({ amountToSend: newAmount })
      }
      return
    }
    if (amountToSend === '0') {
      this.setState({ amountToSend: key })
    } else {
      this.setState({
        amountToSend: this.state.amountToSend.concat(key),
      })
    }
  }

  onSelectRecipient = () => {
    this.props.navigation.navigate('selectWallet', { transition: 'slideToLeft' })
  }

  switchScreen = () => {
    this.setState({
      viewIndex: Math.abs(1 - this.state.viewIndex),
    })
  }

  render() {
    const { viewIndex, amountToSend, searchText } = this.state
    return (
      <View style={screenStyles.ROOT}>
        {/* <Image
          style={screenStyles.backgroundImg}
          source={require('../../../assets/bk-14.jpg')}
        /> */}
        <TopArea navigateTo={this.navigateTo} />
        <Text style={screenStyles.amountToSend}>$ {amountToSend}</Text>
        <CurrencySelector />
        <ScrollableTabView
          style={screenStyles.container}
          onChangeTab={index => this.setState({ viewIndex: index.i })}
          renderTabBar={() => <View />}
          page={viewIndex}
        >
          <View style={screenStyles.childView}>
            <NumPad onInput={this.onKeyInput} />
            <TouchableOpacity style={screenStyles.sendButton} onPress={this.switchScreen}>
              <Text preset="primaryMedium" text="SEND TO" />
            </TouchableOpacity>
          </View>
          <View style={screenStyles.childView}>
            <Contacts
              searchText={searchText}
              updateSearchText={searchText => this.setState({ searchText })}
              onSelectRecipient={this.onSelectRecipient}
            />
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Transfer)
