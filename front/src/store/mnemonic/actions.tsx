import { MnemonicAction } from "../interface/mnemonic.interface"
import { MNEMONIC_FAILURE, MNEMONIC_REQUEST, MNEMONIC_SUCCESS, POST_MNEMONIC_FAILURE, POST_MNEMONIC_REQUEST, POST_MNEMONIC_SUCCESS } from "./types"

export const requestMnemonic = (action: MnemonicAction) => ({ type: MNEMONIC_REQUEST})
export const successMnemonic = (action: MnemonicAction) => ({ type: MNEMONIC_SUCCESS, payload: action.payload})
export const failureMnemonic = (action: MnemonicAction) => ({ type: MNEMONIC_FAILURE, payload: action.payload})

export const postRequestMnemonic = (action: MnemonicAction) => ({ type: POST_MNEMONIC_REQUEST})
export const postSuccessMnemonic = (action: MnemonicAction) => ({ type: POST_MNEMONIC_SUCCESS, payload: action.payload})
export const postFailureMnemonic = (action: MnemonicAction) => ({ type: POST_MNEMONIC_FAILURE, payload: action.payload})