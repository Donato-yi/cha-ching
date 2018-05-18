import * as React from 'react'
import { View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'
import TopArea from './setttings.top-area'
import TopCoinSelector from './settings.coin-selector'
import Options from './settings.options'

import * as screenStyles from './settings.styles'
import { colors } from '../../../themes'

export interface SettingsScreenProps {
  navigation: NavigationParams
}

export interface SettingsScreenState {
  isBusy: boolean
  name: string
  username: string
  coins: Array<string>
}

class Settings extends React.Component<SettingsScreenProps, SettingsScreenState> {
  state = {
    isBusy: false,
    name: 'Thomas Schultz',
    username: '@tschultz',
    coins: ['Expense', 'Etherum', 'Bitcoin'],
  }

  onSave = () => {
    this.props.navigation.navigate('Home')
  }

  navigateTo = (route: string, transition: string = 'default', action: string = 'push') => {
    switch (action) {
      case 'push':
        this.props.navigation.push(route, { transition })
        break
      case 'pop':
        this.props.navigation.pop()
        break
      case 'navigate':
        this.props.navigation.navigate(route, { transition, from: 'profile' })
        break
      default:
        break
    }
  }

  render() {
    const { name, username, coins } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <ScrollView style={screenStyles.container} contentContainerStyle={screenStyles.container}>
          <TopCoinSelector />
          <Options />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
