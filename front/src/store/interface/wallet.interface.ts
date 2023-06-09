import { error, loadding, Account, AccountsNumber  } from "."

export interface WalletState {
	isLoading: loadding
	isError: error
	wallet: Account[]
    accountsNumber: AccountsNumber
};

export interface WalletData {
    data: Account[]
}

export interface WalletAction {
    type: string
    payload?: WalletData | Account | error
}