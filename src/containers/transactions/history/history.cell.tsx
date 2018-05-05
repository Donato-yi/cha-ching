import * as React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './history.styles'
import { colors } from '../../../themes'

interface CellProps {
  name: string
  address: string
  amount: string
  wallet: string
}

const Cell: React.SFC<CellProps> = (props: CellProps) => {
  const { name, address, amount, wallet } = props
  return (
    <View style={screenStyles.cell.container}>
      <View style={screenStyles.cell.avatar}>
        <Icon name="user" size={18} color={colors.weakBlack} />
      </View>
      <View>
        <Text>{name}</Text>
        <Text>{address}</Text>
        <Text>{amount}</Text>
        <Text>{wallet}</Text>
      </View>
    </View>
  )
}

export default Cell
