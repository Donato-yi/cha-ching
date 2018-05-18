import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './connect-contacts.styles'
import { Text } from '../../../components'
import { colors } from '../../../themes'

interface TopAreaProps {
  navigateTo: (route: string, transition?: string, action?: string) => void
}

const TopArea: React.SFC<TopAreaProps> = (props: TopAreaProps) => {
  return (
    <View style={screenStyles.topArea.container}>
      <View style={screenStyles.topArea.button} />
      <Text text="Friends from Facebook" />
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo('findFriends', 'slideToLeft', 'push')}
      >
        <Text text="Next" />
      </TouchableOpacity>
    </View>
  )
}

export default TopArea
