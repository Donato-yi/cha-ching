import * as React from 'react'
import { TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import * as screenStyles from './wallets.styles'
import { Text } from '../../../components'
import { colors } from '../../../themes'
import { COIN_INFO } from '../../../constants/coins'
import { Wallet } from '../../../constants/types'
import { coinToUSDConversionRate } from '../../../constants/dummy'

interface WalletProps {
  navigateTo: (route: string, transition?: string) => void
  wallet: Wallet
}

const Wallet: React.SFC<WalletProps> = (props: WalletProps) => {
  const { wallet, navigateTo } = props
  return (
    <TouchableOpacity
      key={Math.random()}
      style={screenStyles.wallet}
      onPress={() => props.navigateTo('back')}
    >
      <View style={screenStyles.avatarArea}>
        <View style={screenStyles.avatar.container}>
          <Image style={screenStyles.avatar.image} source={COIN_INFO[wallet.coin].avatar} />
        </View>
        <Text preset="primaryTiny" text={COIN_INFO[wallet.coin].name} />
      </View>
      <Text
        preset="primarySmall"
        style={screenStyles.coinBalance}
        text={wallet.balance + ' ' + wallet.coin}
      />
      <Text
        preset="primarySmall"
        style={screenStyles.usdBalance}
        text={'$ ' + wallet.balance * coinToUSDConversionRate[wallet.coin]}
      />
    </TouchableOpacity>
  )
}

export default Wallet
