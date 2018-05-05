import { StackNavigator } from 'react-navigation'

import InviteFriendsScreen from '../containers/contacts/invite-friends-screen'
import FindFriendsScreen from '../containers/contacts/find-friends-screen'
import ContactsScreen from '../containers/contacts/contacts-screen'

export const LoginNavigator = StackNavigator({
  invite: {
    screen: InviteFriendsScreen,
  },
  find: {
    screen: FindFriendsScreen,
  },
  contacts: {
    screen: ContactsScreen,
  },
})

export default LoginNavigator
