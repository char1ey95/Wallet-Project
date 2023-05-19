
import { ACCOUNT_FAILURE, ACCOUNT_REQUEST, ACCOUNT_SUCCESS } from "./types"
import { AccountAction } from "../interface"

export const requestAccount = (action: AccountAction) => ({ type: ACCOUNT_REQUEST})
export const successAccount = (action: AccountAction) => ({ type: ACCOUNT_SUCCESS, payload: action})
export const failureAccount = (action: AccountAction) => ({ type: ACCOUNT_FAILURE, payload: action})