import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './connect-contacts.styles'
import { Text } from '../../../components'
import { colors } from '../../../themes'

interface TopAreaProps {
  navigateTo: (route: string) => void
}

const TopArea: React.SFC<TopAreaProps> = (props: TopAreaProps) => {
  return (
    <View style={screenStyles.topArea.container}>
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo('createProfile')}
      >
        <Icon name="chevron-left" size={30} color={colors.whiteBlue} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigateTo('findFriends')}>
        <Text text="Next" />
      </TouchableOpacity>
    </View>
  )
}

export default TopArea
