import { action } from '../../sagas'

import * as actionTypes from './profile.action-types'

export const getProfile = () => action(actionTypes.GET_PROFILE.REQUEST, {})

export const updateProfile = (
  email: string,
  firstName: string,
  lastName: string,
  username: string,
) => action(actionTypes.UPDATE_PROFILE.REQUEST, { email, firstName, lastName, username })

export const searchFriends = (searchContent: string) =>
  action(actionTypes.SEARCH_FRIENDS.REQUEST, { searchContent })
