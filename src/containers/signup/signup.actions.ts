import { action } from '../../sagas'

import * as actionTypes from './signup.action-types'

export const signUpWithEmail = (
  email: string,
  password: string,
  firstName: string,
  lastName: string,
) => action(actionTypes.SIGNUP_WITH_EMAIL, { email, password, firstName, lastName })

export const signUpWithFacebook = (email: string) =>
  action(actionTypes.SIGNUP_WITH_FACEBOOK, { email })

export const addPhoneNumber = (phone: string, countryCode: string) =>
  action(actionTypes.SIGNUP_WITH_FACEBOOK, { phone, countryCode })

export const verifyPhoneNumber = (code: string) =>
  action(actionTypes.SIGNUP_WITH_FACEBOOK, { code })
