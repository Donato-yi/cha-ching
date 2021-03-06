import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './history.styles'
import { Text } from '../../../components'
import { colors } from '../../../themes'

interface TopAreaProps {
  navigateTo: (route: string, transition?: string, action?: string) => void
}

const TopArea: React.SFC<TopAreaProps> = (props: TopAreaProps) => {
  return (
    <View style={screenStyles.topArea.container}>
      <View style={screenStyles.topArea.button} />
      <Text text="Transaction History" />
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo('back')}
      >
        <Icon name="chevron-right" size={30} color={colors.whiteBlue} />
      </TouchableOpacity>
    </View>
  )
}

export default TopArea
