import { action } from '../../sagas'

import * as actionTypes from './wallets.action-types'

export const getServices = () => action(actionTypes.GET_SERVICES, {})

export const getWallets = (serviceId: string) => action(actionTypes.GET_WALLETS, { serviceId })

export const getCurrencies = () => action(actionTypes.GET_CURRENCIES, {})
