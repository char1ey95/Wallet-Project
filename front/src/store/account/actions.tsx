import { AccountState } from "./account.interface";
import {
  GET_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_SUCCESS
} from "./types";

export const   createAccount = (action: AccountState) => ({type: CREATE_ACCOUNT_SUCCESS, payload: action})
export const getAccounts = (account: any) => ({type: GET_ACCOUNT_SUCCESS, payload: {account}})