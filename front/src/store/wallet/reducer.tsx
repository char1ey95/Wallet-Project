import { WALLET_FAILURE, WALLET_REQUEST, WALLET_SUCCESS } from "."
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
	]
};

export const wallet = (state = initialState, action: { type: ActionType; payload: WalletState }) => {
	console.log("action::", action)
	switch (action.type) {
		case WALLET_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case WALLET_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				wallet: [...state.wallet, action.payload]
			}
		case WALLET_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		default:
			return state;
	}
};
