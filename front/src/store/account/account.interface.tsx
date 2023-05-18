export type account = string
export type balance = number
export type privateKey = string
export type publicKey = string
export type mnemonicWord = string

export interface AccountState {
    account: account
    balance?: balance
    privateKey: privateKey
    publicKey: publicKey
}

export interface SelectedAccount {
    account: account
    balance: balance
    privateKey: privateKey
    publicKey: publicKey
}

export interface InitialState {
    isLoading: boolean
	isError: null | Error
	accounts: AccountState[]
    selectedAccount: SelectedAccount
    mnemonic: mnemonicWord[]
}

export type AccountsPayload = AccountState | SelectedAccount | InitialState | AccountState[] | mnemonicWord[]