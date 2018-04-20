import * as React from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './settings.styles'

export interface SettingsScreenProps {
  navigation: NavigationParams
}

export interface SettingsScreenState {
  isBusy: boolean
}

class Settings extends React.Component<SettingsScreenProps, SettingsScreenState> {
  constructor(props) {
    super(props)
    this.state = { isBusy: false }
  }

  render() {
    const showtext = typeof React.createElement('input')
    return (
      <View style={screenStyles.ROOT}>
        <Image style={screenStyles.backgroundImg} source={require('../../../assets/bk-13.jpg')} />
        <Icon name="home" size={28} style={{ color: 'red' }} />
        <Text>{showtext}</Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
