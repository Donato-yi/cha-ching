import { fork, take } from 'redux-saga/effects'

import * as actionTypes from './login.action-types'
import * as API from '../../api'

import { async } from '../../sagas/asyncSaga'

export function* loginWithEmailSaga() {
  while (true) {
    const action = yield take(actionTypes.LOGIN_WITH_EMAIL.REQUEST)
    yield fork(async, action, API.loginWithEmail, { ...action.payload })
  }
}

export function* loginWithFacebookSaga() {
  while (true) {
    const action = yield take(actionTypes.LOGIN_WITH_FACEBOOK.REQUEST)
    yield fork(async, action, API.loginWithFacebook, { ...action.payload })
  }
}
