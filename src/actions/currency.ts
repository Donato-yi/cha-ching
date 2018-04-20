import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Wallet set up
  setDefaultWallet: ['wallet'],
  setDefaultWalletSuccess: ['res'],
  setDefaultWalletFailure: ['err'],

  // Transfer
  sendMoney: ['currency', 'amount', 'target'],
  sendMoneySuccess: ['res'],
  sendMoneyFailure: ['err'],
})

export const TransactionTypes = Types
export default Creators
