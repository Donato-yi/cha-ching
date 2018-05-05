import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './contacts.styles'
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
        onPress={() => props.navigateTo('addContact')}
      >
        <Icon name="plus" size={20} color={colors.whiteBlue} />
      </TouchableOpacity>
      <Text preset="primaryMediumPlus"> CONTACTS </Text>
      <TouchableOpacity style={screenStyles.topArea.button}>
        <Icon name="mail" size={20} color={colors.whiteBlue} />
      </TouchableOpacity>
    </View>
  )
}

export default TopArea
