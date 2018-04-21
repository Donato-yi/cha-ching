import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './settings.styles'
import { colors } from '../../../themes'

interface TopAreaProps {
  navigateTo: (route: string) => void
}

const TopArea: React.SFC<TopAreaProps> = (props: TopAreaProps) => {
  return (
    <View style={screenStyles.topArea.container}>
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo('wallets')}
      >
        <Icon name="list" size={25} color={colors.blue} />
      </TouchableOpacity>
      <Text preset="primaryMediumPlus" text="SETTINGS" style={screenStyles.topArea.text} />
    </View>
  )
}

export default TopArea
