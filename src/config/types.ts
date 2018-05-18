export type Wallet = {
  coin: string
  balance: number,
}

export type ExchangeService = {
  name: string
  wallets: Array<Wallet>,
}

export type History = {
  from: string
  to: string
  amount: {
    USD: number
    coin: number,
  }
  coin: string,
}

export type User = {
  firstName: string
  lastName: string
  username: string
  email: string
  facebookEmail: string
  topCoins: Array<string>
  exchangeServices: Array<ExchangeService>,
}
