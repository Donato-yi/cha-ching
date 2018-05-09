import { StackNavigator } from 'react-navigation'

import InviteFriendScreen from '../containers/contacts/invite-friend-screen'
import FindFriendsScreen from '../containers/contacts/find-friends-screen'
import ContactsScreen from '../containers/contacts/contacts-screen'
import ConnectContactsScreen from '../containers/contacts/connect-contacts-screen'

export const LoginNavigator = StackNavigator(
  {
    contacts: { screen: ContactsScreen },
    connectContacts: { screen: ConnectContactsScreen },
    inviteFriend: { screen: InviteFriendScreen },
    findFriends: { screen: FindFriendsScreen },
  },
  {
    navigationOptions: {
      header: null,
    },
  },
)

export default LoginNavigator
