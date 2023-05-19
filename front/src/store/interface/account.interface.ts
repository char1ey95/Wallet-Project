import { account, balance, error, loadding, privateKey, publicKey } from "."

export interface Account{
    account: account
    privateKey: privateKey
    publicKey: publicKey
    balance: balance
}

export interface AccountState{
    isLoading: loadding
    isError: error
    accountInfo: Account
}

export interface AccountData {
    data: AccountState
}

export interface AccountAction {
    type: string
    payload?: AccountData | error
}