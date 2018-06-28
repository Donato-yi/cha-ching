import API from './api'
import { User } from '../constants/types'

export const getProfile = ({ userId }) => {
  return API.request(`/account/profile/${userId}`, 'GET')
}

export const updateProfile = ({ userId, firstName, lastName, username }) => {
  return API.request(`/account/profile/${userId}`, 'POST', { firstName, lastName, username })
}

// export const updatePassword = ( uid: string, oldPassword: string, password: string ) => {
//   return API.request( `/account/password/${uid}`, 'POST', { oldPassword, password } )
// }

// export const addFriendsFromFacebook = ( uid: string ) => {
//   return API.request( `/account/addFriendsFromFacebook/${uid}`, 'POST' )
// }

export const searchFriends = ({ userId, searchContent }) => {
  return API.request(`/account/find/${userId}`, 'POST', { searchContent })
}

export const getServices = ({ userId }) => {
  return API.request(`/account/services/${userId}`, 'GET')
}

export const getWallets = ({ userId }) => {
  return API.request(`/account/wallets/${userId}`, 'GET')
}
