import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './login.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* loginSaga() {
  yield all([
    fork(asyncSaga, actionTypes.LOGIN_WITH_EMAIL, API.loginWithEmail),
    fork(asyncSaga, actionTypes.LOGIN_WITH_FACEBOOK, API.loginWithFacebook),
  ])
}
