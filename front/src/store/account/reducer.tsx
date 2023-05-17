import { AccountState, AccountsPayload, InitialState } from "./account.interface";
import { CREATE_ACCOUNT_SUCCESS, GET_ACCOUNT_SUCCESS, MINING_SUCCESS, SELECT_ACCOUNT_SUCCESS } from "./types";

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
		case GET_ACCOUNT_SUCCESS:
			console.log(action.payload)
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [...action.payload as AccountState[]]
			}
		case CREATE_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [...state.accounts, action.payload],
				selectedAccount: action.payload,
			}
		case SELECT_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				selectedAccount: action.payload
			};
		case MINING_SUCCESS:
			return {
				...state,
				isLoading:false,
				isError: null,
				selectedAccount: action.payload
			}
		default:
			return state;
	}
};
