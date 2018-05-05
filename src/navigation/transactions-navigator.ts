import { StackNavigator } from 'react-navigation'

import TransferScreen from '../containers/transactions/transfer'
import HistoryScreen from '../containers/transactions/history'

export const TransactionsNavigator = StackNavigator({
  transfer: {
    screen: TransferScreen,
  },
  history: {
    screen: HistoryScreen,
  },
})

export default TransactionsNavigator
