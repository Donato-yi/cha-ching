import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import Collapisble from 'react-native-collapsible'
import ScrollableTabView from 'react-native-scrollable-tab-view'

import * as screenStyles from './home.styles'
import { colors } from '../../../themes'

import { Text } from '../../../components'
import TopArea from './home.top-area'
import CurrencySelector from './home.currency-selector'
import NumPad from './home.num-pad'
import Contacts from './home.contacts'

export interface HomeScreenProps {
  navigation: NavigationParams
}

export interface HomeScreenState {
  isBusy: boolean
  viewIndex: number
  amountToSend: string
}

class Home extends React.Component<HomeScreenProps, HomeScreenState> {
  state = {
    isBusy: false,
    viewIndex: 0,
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
      viewIndex: Math.abs(1 - this.state.viewIndex),
    })
  }

  render() {
    const { viewIndex, amountToSend } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-14.jpg')} />
        <TopArea navigateTo={this.navigate} />
        <Text style={screenStyles.amountToSend}>$ {amountToSend}</Text>
        <CurrencySelector />
        <ScrollableTabView
          style={screenStyles.container}
          onChangeTab={index => this.setState({ viewIndex: index.i })}
          renderTabBar={() => <View />}
          page={viewIndex}
        >
          <View style={screenStyles.childView}>
            <NumPad onInput={this.onInput} />
            <TouchableOpacity style={screenStyles.sendButton} onPress={this.switchInputMode}>
              <Text preset="primaryMedium" text="SEND TO" />
            </TouchableOpacity>
          </View>
          <View style={screenStyles.childView}>
            <Contacts />
          </View>
        </ScrollableTabView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
