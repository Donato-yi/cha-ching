import { StackNavigator } from 'react-navigation'

import TransferScreen from '../containers/transactions/transfer-screen'
import HistoryScreen from '../containers/transactions/history-screen'

export const TransactionsNavigator = StackNavigator({
  transfer: {
    screen: TransferScreen,
  },
  history: {
    screen: HistoryScreen,
  },
})

export default TransactionsNavigator
