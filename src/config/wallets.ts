import { ImagePropertiesSourceOptions } from 'react-native'

export type Wallet = {
  name: string
  avatar: ImagePropertiesSourceOptions,
}

export const WALLET_DATA: object = {
  binance: {
    name: 'Binance',
    avatar: require('../assets/wallets/binance.png'),
  },
  coinbase: {
    name: 'Coinbase',
    avatar: require('../assets/wallets/coinbase.png'),
  },
  gdax: {
    name: 'Gdax',
    avatar: require('../assets/wallets/gdax.png'),
  },
}

export const wallets: Array<Wallet> = [
  {
    name: 'Binance',
    avatar: require('../assets/wallets/binance.png'),
  },
  {
    name: 'Coinbase',
    avatar: require('../assets/wallets/coinbase.png'),
  },
  {
    name: 'Gdax',
    avatar: require('../assets/wallets/gdax.png'),
  },
]

export default wallets
