import { AccountsPayload, InitialState } from "./account.interface";
import { CREATE_ACCOUNT_SUCCESS, GET_ACCOUNT_SUCCESS } from "./types";

const initialState: InitialState = {
	isLoading: true,
	isError: null,
	accounts: [
		{
			account: "",
			balance: 0,
			privateKey: "",
			publicKey: "",
		},
	],
	selectedAccount: {
		account: "",
		balance: 0,
		privateKey: "",
		publicKey: "",
	}
};

export const accounts = (state = initialState, action: { type: string; payload: AccountsPayload }) => {
	switch (action.type) {
		case CREATE_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [...state.accounts, action.payload],
				selectedAccount: action.payload,
			}
		case GET_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [],
				selectedAccount: []
			};
		default:
			return state;
	}
};
