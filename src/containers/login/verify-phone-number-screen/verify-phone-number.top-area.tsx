import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './verify-phone-number.styles'
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
        onPress={() => props.navigateTo('signup')}
      >
        <Text text="SIGN UP" preset="secondaryMedium" />
        {/* <Icon name="plus" size={20} color={colors.whiteBlue} /> */}
      </TouchableOpacity>
    </View>
  )
}

export default TopArea
