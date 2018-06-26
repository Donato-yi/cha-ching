import api from './api'

export const loginWithEmail = ({ email, password }) => {
  return api.request('/login/email', 'POST', { email, password })
}

export const loginWithFacebook = ({ email }) => {
  return api.request('/login/facebook', 'POST', { email })
}

export const signUpWithEmail = ({ email, password, firstName, lastName }) => {
  return api.request('/signup/email', 'POST', { email, password, firstName, lastName })
}

export const signUpWithFacebook = ({ email, firstName, lastName }) => {
  return api.request('/signup/facebook', 'POST', { email, firstName, lastName })
}

export const addPhoneNumber = ({ phone, countryCode, token }) => {
  return api.request('/verify/add-phone', 'POST', { phone, countryCode, token })
}

export const verifyPhoneNumber = ({ email, password, firstName, lastName }) => {
  return api.request('/signup', 'POST', { email, password, firstName, lastName })
}

export const logout = ({ token }) => {
  return api.request('/logout', 'PUT', { token })
}
