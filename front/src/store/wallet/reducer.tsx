import { GET_WALLET_FAILURE, GET_WALLET_REQUEST, GET_WALLET_SUCCESS } from "."
import { WalletState } from "../interface"

const initialState: WalletState = {
	isLoading: true,
	isError: null,
	wallet: [
		{
			account: "",
			balance: 0,
			privateKey: "",
			publicKey: "",
		},
	]
};

export const wallet = (state = initialState, action: { type: string; payload: any }) => {
	switch (action.type) {
		case GET_WALLET_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case GET_WALLET_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [...state.wallet, action.payload]
			}
		case GET_WALLET_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.e,
			}
		default:
			return state;
	}
};
