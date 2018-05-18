import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './find-friends.styles'
import { Text } from '../../../components'
import { colors } from '../../../themes'

interface TopAreaProps {
  navigateTo: (route: string, transition?: string, action?: string) => void
  fromRoute: string
}

const TopArea: React.SFC<TopAreaProps> = (props: TopAreaProps) => {
  return (
    <View style={screenStyles.topArea.container}>
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo(null, null, 'pop')}
      >
        <Icon name="chevron-left" size={30} color={colors.whiteBlue} />
      </TouchableOpacity>
      {props.fromRoute === 'connectContacts' && (
        <TouchableOpacity
          style={screenStyles.topArea.button}
          onPress={() => props.navigateTo('dashboardStack', 'slideToLeft', 'navigate')}
        >
          <Text text="Finish" />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default TopArea
