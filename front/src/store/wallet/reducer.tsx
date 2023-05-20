import { CREATE_WALLET_FAILURE, CREATE_WALLET_REQUEST, CREATE_WALLET_SUCCESS } from "."
import { ActionType, WalletState } from "../interface"

const initialState: WalletState = {
	isLoading: true,
	isError: null,
	wallet: [
		{
			account: "",
			privateKey: "",
			publicKey: "",
			balance: 0,
		},
	],
	accountNumber: 1
};

export const wallet = (state = initialState, action: { type: ActionType; payload: WalletState }) => {
	switch (action.type) {
		case CREATE_WALLET_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case CREATE_WALLET_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				wallet: [action.payload]
			}
		case CREATE_WALLET_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		default:
			return state;
	}
};
