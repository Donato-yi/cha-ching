import API from './api'

export const getContacts = ({ userId }) => {
  return API.request(`/connection/${userId}`, 'GET')
}

export const getPendingConnections = ({ userId }) => {
  return API.request(`/connection/pending/${userId}`, 'GET')
}

export const inviteFriend = ({ userId, friendId }) => {
  return API.request(`/connection/invite/${userId}/${friendId}`, 'POST')
}

export const acceptInvitation = ({ userId, connectionId }) => {
  return API.request(`/account/password/${userId}/${connectionId}`, 'POST')
}
