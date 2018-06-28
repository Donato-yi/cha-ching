import { action } from '../../sagas'

import * as actionTypes from './login.action-types'

export const loginWithEmail = (email: string, password: string) =>
  action(actionTypes.LOGIN_WITH_EMAIL, { email, password })

export const loginWithFacebook = (email: string) =>
  action(actionTypes.LOGIN_WITH_FACEBOOK, { email })
