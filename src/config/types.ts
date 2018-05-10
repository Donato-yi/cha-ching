import { ImagePropertiesSourceOptions } from 'react-native'

export type Coin = {
  name: string
  avatar: ImagePropertiesSourceOptions,
}

export type History = {
  from: string
  to: string
  amount: number
  coin: string,
}
