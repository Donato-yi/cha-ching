export type ASYNC_ACTION_TYPE = {
  REQUEST: string
  SUCCESS: string
  FAILURE: string,
}

export const createAsyncActionTypes = (base: string): ASYNC_ACTION_TYPE => {
  return {
    REQUEST: `${base}`,
    SUCCESS: `${base}_SUCCESS`,
    FAILURE: `${base}_FAILURE`,
  }
}

export function action(type, payload = {}) {
  return { type, payload }
}

export function asyncAction(actionType: string) {
  const asyncActionType = createAsyncActionTypes(actionType)
  return {
    success: response => action(asyncActionType.SUCCESS, response),
    failure: err => action(asyncActionType.FAILURE, err),
  }
}
