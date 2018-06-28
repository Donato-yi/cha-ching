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
  id: string
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  facebookEmail: string
  topCoins: Array<string>
  exchangeServices: Array<ExchangeService>,
}

export type Connection = {
  firstUserId: number
  firstUserName: string
  secondUserId: number
  secondUserName: string
  status: string,
}

export type Transaction = {
  sender: string
  recipient: string
  sender_service: string
  recipeint_service: string
  currency: string
  amount: number,
}

export type Response = {
  data: any
  meta: {
    version: string
    received: number
    executed: number,
  }
  response: {
    code: number
    errors: any
    message: string,
  },
}

export type Request = {
  url: string
  method: 'POST' | 'GET' | 'PUT' | 'DELETE'
  headers: any
  data: any,
}
