import { ACCOUNT_REQUEST, ACCOUNT_SUCCESS, ACCOUNT_FAILURE } from "./types";
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
				accountInfo: {...action.payload.accountInfo}
			}
		case ACCOUNT_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		default:
			return state;
	}
};
