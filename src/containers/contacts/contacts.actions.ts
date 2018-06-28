import { action } from '../../sagas'

import * as actionTypes from './contacts.action-types'

export const inviteFriend = (friendId: string) => action(actionTypes.INVITE_FRIEND, { friendId })

export const getConnections = () => action(actionTypes.GET_CONNECTIONS, {})

export const getPendingInvitations = () => action(actionTypes.GET_PENDING_INVITATIONS, {})

export const acceptInvitation = (connectionId: string) =>
  action(actionTypes.ACCEPT_INVITATION, { connectionId })
