import * as React from 'react'
import { View, Image } from 'react-native'
import { NavigationParams } from 'react-navigation'
import * as screenStyles from './launch.styles'

export interface LaunchScreenProps {
  navigation: NavigationParams
}

const Launch: React.SFC<LaunchScreenProps> = (props: LaunchScreenProps) => {
  setTimeout(() => props.navigation.navigate('login'), 1000)

  return (
    <View style={screenStyles.ROOT}>
      <Image style={screenStyles.backgroundImg} source={require('../../assets/bk-1.jpg')} />
      <Image style={screenStyles.logoImg} source={require('../../assets/logo.png')} />
    </View>
  )
}

export default Launch