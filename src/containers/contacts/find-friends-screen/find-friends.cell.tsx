import * as React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './find-friends.styles'
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
      <View style={screenStyles.cell.userContainer}>
        <Text preset="secondaryMedium" text={name} />
        <Text preset="secondaryTiny" text={'@' + name + ', ' + address} />
      </View>
    </View>
  )
}

export default Cell
