import { MnemonicAction } from "../interface/mnemonic.interface"
import { MNEMONIC_FAILURE, MNEMONIC_REQUEST, MNEMONIC_SUCCESS } from "./types"

export const requestMnemonic = (action: MnemonicAction) => ({ type: MNEMONIC_REQUEST})
export const successMnemonic = (action: MnemonicAction) => ({ type: MNEMONIC_SUCCESS, payload: action})
export const failureMnemonic = (action: MnemonicAction) => ({ type: MNEMONIC_FAILURE, payload: action})