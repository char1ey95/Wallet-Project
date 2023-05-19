import { error, loadding, Account  } from "."

export interface WalletState {
	isLoading: loadding
	isError: error
	wallet: Account[]
};

export interface WalletData {
    data: Account[]
}

export interface WalletAction {
    type: string
    payload?: WalletData | error
}