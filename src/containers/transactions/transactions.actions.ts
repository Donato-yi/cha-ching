import { action } from '../../sagas'

import * as actionTypes from './transactions.action-types'

export const getTransactionHistory = () => action(actionTypes.GET_TRANSACTION_HISTORY, {})

export const transfer = (
  userServiceId: string,
  friendId: string,
  friendServiceId: string,
  currency: string,
  amount: number,
) =>
  action(actionTypes.TRANSFER, {
    userServiceId,
    friendId,
    friendServiceId,
    currency,
    amount,
  })
