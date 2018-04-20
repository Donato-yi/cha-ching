import { takeLatest, all } from 'redux-saga/effects'

/**
 * Types of actions
 */
import { AuthTypes } from '../actions/auth'

/**
 * Sagas
 */
import { emailLogin } from './auth'

/**
 * API
 */
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = () => {}

/**
 * Connect Types to Sagas
 */
export default function* root() {
  yield all([
    // some sagas receive extra parameters in addition to an action
    takeLatest(AuthTypes.EMAIL_LOGIN, emailLogin, api),
  ])
}
