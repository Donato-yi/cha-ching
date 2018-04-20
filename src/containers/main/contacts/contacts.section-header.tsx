import * as React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './contacts.styles'
import { colors } from '../../../themes'

interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = (props: HeaderProps) => {
  const { title } = props
  return (
    <View style={screenStyles.header.container}>
      <Text style={screenStyles.header.title}>{title}</Text>
    </View>
  )
}

export default Header
