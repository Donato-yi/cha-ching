import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './wallets.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* transactionSaga() {
  yield all([
    fork(asyncSaga, actionTypes.GET_WALLETS, API.getWallets),
    fork(asyncSaga, actionTypes.GET_SERVICES, API.getServices),
    fork(asyncSaga, actionTypes.GET_CURRENCIES, API.getCurrencies),
  ])
}
