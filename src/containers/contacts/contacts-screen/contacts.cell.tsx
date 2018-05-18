import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './contacts.styles'
import { Text } from '../../../components'
import { colors } from '../../../themes'

interface CellProps {
  name: string
  address: string
}

const Cell: React.SFC<CellProps> = (props: CellProps) => {
  const { name, address } = props
  return (
    <View style={screenStyles.cell.container}>
      <View style={screenStyles.cell.avatar}>
        <Icon name="user" size={18} color={colors.text} />
      </View>
      <View style={screenStyles.cell.infoContainer}>
        <Text preset="secondarySmall" text={name} />
        <Text preset="secondaryTiny" text={address} />
      </View>
    </View>
  )
}

export default Cell
