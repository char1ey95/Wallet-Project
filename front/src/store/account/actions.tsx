import {
  GET_ACCOUNT_SUCCESS,
} from "./types";

export const getAccount = (account: any) => ({type: GET_ACCOUNT_SUCCESS, payload: {account}})