import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './transfer.styles'
import { colors } from '../../../themes'

interface TransferTopAreaProps {
  navigateTo: (route: string, transition?: string, action?: string) => void
}

const TransferTopArea: React.SFC<TransferTopAreaProps> = (props: TransferTopAreaProps) => {
  return (
    <View style={screenStyles.topArea.container}>
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo('profile', 'slideToRight')}
      >
        <Icon name="user" size={20} color={colors.white} />
      </TouchableOpacity>
      <TouchableOpacity
        style={screenStyles.topArea.button}
        onPress={() => props.navigateTo('wallets', 'slideToLeft')}
      >
        <Icon name="credit-card" size={20} color={colors.white} />
      </TouchableOpacity>
    </View>
  )
}

export default TransferTopArea
