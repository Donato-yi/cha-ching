import { action } from '../../sagas'

import * as actionTypes from './settings.action-types'

export const logout = () => action(actionTypes.LOG_OUT, {})
