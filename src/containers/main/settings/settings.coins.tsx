import * as React from 'react'
import { TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Text } from '../../../components'

import * as screenStyles from './settings.styles'
import { colors } from '../../../themes'

interface CoinsSectionProps {
  coins: Array<string>
}

const CoinsSection: React.SFC<CoinsSectionProps> = (props: CoinsSectionProps) => {
  const { coins } = props
  return (
    <View style={screenStyles.coins.container}>
      {coins.map(coin => (
        <TouchableOpacity key={Math.random()} style={screenStyles.coins.coin}>
          <Text preset="secondaryMedium" text={coin} style={{ color: colors.blue }} />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CoinsSection
