import { AccountState } from "./account.interface";
import {
  GET_ACCOUNT_SUCCESS,
  SELECT_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_SUCCESS,
  MINING_SUCCESS
} from "./types";

export const createAccount = (action: AccountState) => ({type: CREATE_ACCOUNT_SUCCESS, payload: action})
export const selectAccount = (action: AccountState) => ({type: SELECT_ACCOUNT_SUCCESS, payload: action})
export const mineSuccess = (action: AccountState) => ({type: MINING_SUCCESS, payload: action})
export const getAccounts = (action: AccountState[]) => ({type: GET_ACCOUNT_SUCCESS, payload: action})