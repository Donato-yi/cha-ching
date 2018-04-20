import * as React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './contacts.styles'
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
        <Icon name="user" size={18} color={colors.weakBlack} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{address}</Text>
      </View>
    </View>
  )
}

export default Cell
