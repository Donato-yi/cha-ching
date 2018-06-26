import { all, fork } from 'redux-saga/effects'
import { loginWithEmailSaga, loginWithFacebookSaga } from '../containers/login/login.saga'
import {
  signUpWithEmailSaga,
  signUpWithFacebookSaga,
  addPhoneNumberSaga,
  verifyPhoneNumberSaga,
} from '../containers/signup/signup.saga'

export function* authSaga() {
  yield all([
    fork(loginWithEmailSaga),
    fork(loginWithFacebookSaga),
    fork(signUpWithEmailSaga),
    fork(signUpWithFacebookSaga),
    fork(addPhoneNumberSaga),
    fork(verifyPhoneNumberSaga),
  ])
}
