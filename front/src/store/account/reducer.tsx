import { ACCOUNT_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_FAILURE, SELECT_ACCOUNT_FAILURE, SELECT_ACCOUNT_REQUEST, SELECT_ACCOUNT_SUCCESS } from "./types";
import { AccountState, ActionType } from "../interface";

const initialState: AccountState = {
	isLoading: true,
	isError: null,
	accountInfo: {
		account: "",
		privateKey: "",
		publicKey: "",
		balance: 0
	}
};

export const account = (state = initialState, action: { type: ActionType; payload: AccountState }) => {
	console.log("action::", action)
	switch (action.type) {
		case ACCOUNT_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accountInfo: {...action.payload}
			}
		case ACCOUNT_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		case SELECT_ACCOUNT_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case SELECT_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accountInfo: {...action.payload}
			}
		case SELECT_ACCOUNT_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		default:
			return state;
	}
};
