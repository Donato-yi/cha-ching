import API from './api'

export const transfer = ({
  userId,
  friendId,
  userServiceId,
  friendServiceId,
  currency,
  amount,
}) => {
  return API.request(`/transaction/transfer`, 'POST', {
    sender: userId,
    sender_service: userServiceId,
    recipient: friendId,
    recipient_service: friendServiceId,
    currency,
    amount,
  })
}

export const getTransactionHistory = ({ userId }) => {
  return API.request(`/transaction/hisotry/${userId}`, 'GET')
}
