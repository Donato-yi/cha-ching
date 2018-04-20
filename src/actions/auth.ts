import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Login
  emailLogin: ['email', 'password'],
  emailLoginSuccess: ['res'],
  emailLoginFailure: ['err'],
  facebookLogin: null,
  facebookLoginSuccess: ['res'],
  facebookLoginFailure: ['err'],

  // Logout
  logout: null,
})

export const AuthTypes = Types
export default Creators
