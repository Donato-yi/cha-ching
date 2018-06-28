import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './transactions.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* transactionSaga() {
  yield all([
    fork(asyncSaga, actionTypes.GET_TRANSACTION_HISTORY, API.getTransactionHistory),
    fork(asyncSaga, actionTypes.TRANSFER, API.transfer),
  ])
}
