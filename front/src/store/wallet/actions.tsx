import { WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "./types"
import { WalletAction } from "../interface"

export const requestWallet = (action: WalletAction) => ({ type: WALLET_REQUEST})
export const successWallet = (action: WalletAction) => ({ type: WALLET_SUCCESS, payload: action.payload})
export const failureWallet = (action: WalletAction) => ({ type: WALLET_FAILURE, payload: action.payload})