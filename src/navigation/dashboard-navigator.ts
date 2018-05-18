import { StackNavigator } from 'react-navigation'

import TransferScreen from '../containers/transactions/transfer-screen'
import HistoryScreen from '../containers/transactions/history-screen'
import ConfirmTransactionScreen from '../containers/transactions/confirm-transaction-screen'
import WalletsScreen from '../containers/wallets/wallets-screen'
import SelectWalletScreen from '../containers/wallets/select-wallet-screen'
import ProfileScreen from '../containers/profile/profile-screen'
import EditProfileScreen from '../containers/profile/edit-profile-screen'
import SettingsScreen from '../containers/settings/settings-screen'
import InviteFriendScreen from '../containers/contacts/invite-friend-screen'
import FindFriendsScreen from '../containers/contacts/find-friends-screen'
import ContactsScreen from '../containers/contacts/contacts-screen'
import ConnectContactsScreen from '../containers/contacts/connect-contacts-screen'

import TransitionConfiguration from './transitions'

export const DashboardNavigator = StackNavigator(
  {
    transfer: { screen: TransferScreen },
    history: { screen: HistoryScreen },
    confirmTransaction: { screen: ConfirmTransactionScreen },
    wallets: { screen: WalletsScreen },
    selectWallet: { screen: SelectWalletScreen },
    profile: { screen: ProfileScreen },
    editProfile: { screen: EditProfileScreen },
    settings: { screen: SettingsScreen },
    contacts: { screen: ContactsScreen },
    connectContacts: { screen: ConnectContactsScreen },
    inviteFriend: { screen: InviteFriendScreen },
    findFriends: { screen: FindFriendsScreen },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
    transitionConfig: TransitionConfiguration,
  },
)

export default DashboardNavigator
