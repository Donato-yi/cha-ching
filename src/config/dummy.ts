import { Wallet, History, ExchangeService } from './types'

export const users: Array<{ name: string; address: string }> = [
  { name: 'A test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'b test user', address: 'San Fransico, CA' },
  { name: 'B test user', address: 'San Fransico, CA' },
  { name: 'b test user', address: 'San Fransico, CA' },
  { name: 'd test user', address: 'San Fransico, CA' },
  { name: 'da test user', address: 'San Fransico, CA' },
  { name: 'Da test user', address: 'San Fransico, CA' },
  { name: 'c test user', address: 'San Fransico, CA' },
  { name: 'z test user', address: 'San Fransico, CA' },
  { name: 'D test user', address: 'San Fransico, CA' },
  { name: 'S test user', address: 'San Fransico, CA' },
  { name: 's test user', address: 'San Fransico, CA' },
  { name: 'W test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
  { name: 'w test user', address: 'San Fransico, CA' },
  { name: 'na test user', address: 'San Fransico, CA' },
  { name: 'ya test user', address: 'San Fransico, CA' },
  { name: 'ya test user', address: 'San Fransico, CA' },
  { name: 'ea test user', address: 'San Fransico, CA' },
  { name: 'ma test user', address: 'San Fransico, CA' },
  { name: 'ja test user', address: 'San Fransico, CA' },
  { name: 'ia test user', address: 'San Fransico, CA' },
  { name: 'ca test user', address: 'San Fransico, CA' },
  { name: 'qa test user', address: 'San Fransico, CA' },
  { name: 'a test user', address: 'San Fransico, CA' },
]

export const history: Array<History> = [
  {
    from: 'jacob_shamberger',
    to: 'thomas_schulz',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'jacob_shamberger',
    to: 'thomas_schulz',
    amount: {
      USD: 99.99,
      coin: 0.2,
    },
    coin: 'ETH',
  },
  {
    from: 'jacob_shamberger',
    to: 'thomas_schulz',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'LTC',
  },
  {
    from: 'jacob_shamberger',
    to: 'thomas_schulz',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BNB',
  },
  {
    from: 'jacob_shamberger',
    to: 'thomas_schulz',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'ETH',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'ETH',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'ETH',
  },
  {
    from: 'thomas_schulz',
    to: 'jacob_shamberger',
    amount: {
      USD: 99.99,
      coin: 0.01,
    },
    coin: 'BTC',
  },
]

export const services: Array<ExchangeService> = [
  {
    name: 'Binance',
    wallets: [
      {
        coin: 'BTC',
        balance: 0.5,
      },
      {
        coin: 'LTC',
        balance: 5,
      },
      {
        coin: 'ETH',
        balance: 2,
      },
      {
        coin: 'BNB',
        balance: 43,
      },
    ],
  },
  {
    name: 'Coinbase',
    wallets: [
      {
        coin: 'BTC',
        balance: 0.5,
      },
      {
        coin: 'LTC',
        balance: 5,
      },
      {
        coin: 'ETH',
        balance: 2,
      },
    ],
  },
]

export const coins: Array<string> = ['BTC', 'ETH', 'LTC', 'BNB', 'BCH']

export const topCoins: Array<string> = ['BTC', 'ETH', 'LTC']

export const wallets: Array<Wallet> = [
  {
    coin: 'BTC',
    balance: 1,
  },
  {
    coin: 'ETH',
    balance: 1,
  },
  {
    coin: 'LTC',
    balance: 1,
  },
]

export const coinToUSDConversionRate = {
  BTC: 8716.36,
  ETH: 727.18,
  LTC: 145.54,
  BCH: 1426.66,
  BNB: 13.03,
}
