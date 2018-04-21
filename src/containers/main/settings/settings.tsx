import * as React from 'react'
import { View, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'
import TopArea from './setttings.top-area'
import Profile from './settings.profile'
import Coins from './settings.coins'
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

  navigateTo = (route: string) => {
    this.props.navigation.navigate(route)
  }

  render() {
    const { name, username, coins } = this.state
    return (
      <View style={screenStyles.ROOT}>
        <TopArea navigateTo={this.navigateTo} />
        <Profile name={name} username={username} navigateTo={this.navigateTo} />
        <Coins coins={coins} />
        <Options navigateTo={this.navigateTo} />
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
