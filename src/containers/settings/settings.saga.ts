import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './settings.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* settingsSaga() {
  yield all([fork(asyncSaga, actionTypes.LOG_OUT, API.logout)])
}
