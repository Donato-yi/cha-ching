import { ImagePropertiesSourceOptions } from 'react-native'

export type Coin = {
  name: string
  avatar: ImagePropertiesSourceOptions,
}

export const COIN_DATA: object = {
  btc: {
    name: 'Bitcoin',
    avatar: require('../assets/coins/btc.png'),
  },
  eth: {
    name: 'Ethereum',
    avatar: require('../assets/coins/eth.png'),
  },
  ltc: {
    name: 'Litecoin',
    avatar: require('../assets/coins/ltc.png'),
  },
  bnb: {
    name: 'Binance Coin',
    avatar: require('../assets/coins/bnb.png'),
  },
  bch: {
    name: 'Bitcoin Cash',
    avatar: require('../assets/coins/bch.png'),
  },
}

export const coins: Array<Coin> = [
  {
    name: 'Bitcoin',
    avatar: require('../assets/coins/btc.png'),
  },
  {
    name: 'Ethereum',
    avatar: require('../assets/coins/eth.png'),
  },
  {
    name: 'Litecoin',
    avatar: require('../assets/coins/ltc.png'),
  },
  {
    name: 'Binance Coin',
    avatar: require('../assets/coins/bnb.png'),
  },
  {
    name: 'Bitcoin Cash',
    avatar: require('../assets/coins/bch.png'),
  },
]

export default coins
