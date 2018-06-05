import * as React from 'react'
import { View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'
import { COIN_INFO } from '../../../constants/coins'
import { History } from '../../../constants/types'
import * as screenStyles from './history.styles'

interface CellProps {
  data: History
}

const Cell: React.SFC<CellProps> = (props: CellProps) => {
  const { from, to, amount, coin } = props.data
  return (
    <View style={screenStyles.cell.container}>
      <Text preset="primaryTiny" style={screenStyles.cell.from} text={'@' + from} />
      <Text preset="primaryTiny" style={screenStyles.cell.from} text={'@' + to} />
      <View style={screenStyles.cell.amountContainer}>
        <Text preset="primaryTiny" text={amount.USD + ' USD'} />
        <Text preset="primaryTiny" text={amount.coin + ' ' + coin} />
      </View>
      <Image style={screenStyles.cell.coinImage} source={COIN_INFO[coin].avatar} />
    </View>
  )
}

export default Cell
