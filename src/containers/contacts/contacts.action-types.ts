import { createAsyncActionTypes } from '../../sagas'

export const INVITE_FRIEND = createAsyncActionTypes('INVITE_FRIEND')
export const GET_CONNECTIONS = createAsyncActionTypes('GET_CONNECTIONS')
export const GET_PENDING_INVITATIONS = createAsyncActionTypes('GET_PENDING_INVITATIONS')
export const ACCEPT_INVITATION = createAsyncActionTypes('ACCEPT_INVITATION')
