import { fork, take } from 'redux-saga/effects'

import * as actionTypes from './signup.action-types'
import * as API from '../../api'

import { async } from '../../sagas/asyncSaga'

export function* signUpWithEmailSaga() {
  while (true) {
    const action = yield take(actionTypes.SIGNUP_WITH_EMAIL.REQUEST)
    yield fork(async, action, API.signUpWithEmail, { ...action.payload })
  }
}

export function* signUpWithFacebookSaga() {
  while (true) {
    const action = yield take(actionTypes.SIGNUP_WITH_FACEBOOK.REQUEST)
    yield fork(async, action, API.signUpWithFacebook, { ...action.payload })
  }
}

export function* addPhoneNumberSaga() {
  while (true) {
    const action = yield take(actionTypes.ADD_PHONE_NUMBER.REQUEST)
    yield fork(async, action, API.addPhoneNumber, { ...action.payload })
  }
}

export function* verifyPhoneNumberSaga() {
  while (true) {
    const action = yield take(actionTypes.VERIFY_PHONE_NUMBER.REQUEST)
    yield fork(async, action, API.verifyPhoneNumber, { ...action.payload })
  }
}
