import { InitialState } from "./account.interface";
import { GET_ACCOUNT_SUCCESS } from "./types";

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

export const accounts = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case GET_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [
					{
						account: action.payload.account,
						balance: 0,
						privateKey: action.payload.privateKey,
						publicKey: action.payload.publicKey
					},
				],
			};
		default:
			return state;
	}
};
