import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './home.styles'
import { colors } from '../../../themes'

interface HomeTopAreaProps {
  navigateTo: (route: string) => void
}

const HomeTopArea: React.SFC<HomeTopAreaProps> = (props: HomeTopAreaProps) => {
  return (
    <View style={screenStyles.topArea}>
      <TouchableOpacity style={screenStyles.topButton} onPress={() => props.navigateTo('profile')}>
        <Icon name="user" size={25} color={colors.weakBlack} />
      </TouchableOpacity>
      <TouchableOpacity style={screenStyles.topButton}>
        <Icon name="mail" size={25} color={colors.weakBlack} />
      </TouchableOpacity>
    </View>
  )
}

export default HomeTopArea
