import { call, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
import AuthActions from '../actions/auth'

export function* emailLogin(api, action) {
  // const { payload } = action
  const response = { ok: true }

  if (response.ok) {
    yield put(AuthActions.emailLoginSuccess())
  } else {
    yield put(AuthActions.emailLoginFailure())
  }
}
