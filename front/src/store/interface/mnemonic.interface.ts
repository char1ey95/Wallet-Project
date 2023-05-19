import { MasterKey, Mnemonic, error, loadding } from "./interface";

export interface MnemonicState {
    isLoading: loadding
    isError: error
    mnemonics: Mnemonic[]
    masterKey: MasterKey
}

export interface MnemonicData {
    data: Mnemonic[]
}

export interface MnemonicAction {
    type: string
    payload?: MnemonicData | string
}