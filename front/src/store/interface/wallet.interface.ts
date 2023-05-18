import { error, loadding, Account  } from "."

export interface WalletState {
	isLoading: loadding
	isError: error
	wallet: Account[]
};