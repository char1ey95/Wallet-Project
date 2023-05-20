import { CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS, CREATE_WALLET_FAILURE, CREATE_WALLET_REQUEST, CREATE_WALLET_SUCCESS } from "./types"
import { WalletAction } from "../interface"

export const requestWallet = (action: WalletAction) => ({ type: CREATE_WALLET_REQUEST})
export const successWallet = (action: WalletAction) => ({ type: CREATE_WALLET_SUCCESS, payload: action.payload})
export const failureWallet = (action: WalletAction) => ({ type: CREATE_WALLET_FAILURE, payload: action.payload})

export const requestCreateAccount = (action: WalletAction) => ({ type: CREATE_ACCOUNT_REQUEST})
export const successCreateAccount = (action: WalletAction) => ({ type: CREATE_ACCOUNT_SUCCESS, payload: action.payload})
export const failureCreateAccount = (action: WalletAction) => ({ type: CREATE_ACCOUNT_FAILURE, payload: action.payload})