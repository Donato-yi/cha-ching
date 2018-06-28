import { fork, all } from 'redux-saga/effects'

import * as actionTypes from './signup.action-types'
import * as API from '../../api'

import { asyncSaga } from '../../sagas/asyncSaga'

export function* signUpSaga() {
  yield all([
    fork(asyncSaga, actionTypes.ADD_PHONE_NUMBER, API.addPhoneNumber),
    fork(asyncSaga, actionTypes.VERIFY_PHONE_NUMBER, API.verifyPhoneNumber),
    fork(asyncSaga, actionTypes.SIGNUP_WITH_EMAIL, API.signUpWithEmail),
    fork(asyncSaga, actionTypes.SIGNUP_WITH_FACEBOOK, API.signUpWithFacebook),
  ])
}
