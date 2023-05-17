import { AccountState, AccountsPayload, InitialState } from "./account.interface";
import { CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_SUCCESS, GET_ACCOUNT_FAILURE, GET_ACCOUNT_SUCCESS, MINING_FAILURE, MINING_SUCCESS, SELECT_ACCOUNT_FAILURE, SELECT_ACCOUNT_SUCCESS } from "./types";

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
		case CREATE_ACCOUNT_FAILURE:
			return { ...state, isLoading: true, isError: "" }
		case SELECT_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				selectedAccount: action.payload
			};
		case SELECT_ACCOUNT_FAILURE:
			return { ...state, isLoading: true, isError: "" }
		case GET_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [...action.payload as AccountState[]]
			}
		case GET_ACCOUNT_FAILURE:
			return { ...state, isLoading: true, isError: "" }
		case MINING_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				selectedAccount: action.payload
			}
		case MINING_FAILURE:
			return { ...state, isLoading: true, isError: "" }
		default:
			return state;
	}
};
