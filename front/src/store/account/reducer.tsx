import { GET_ACCOUNT_SUCCESS } from "./types";

const initialState = {
	isLoading: true,
	isError: null,
	accounts: [
		{
			account: "",
			balance: 0,
		},
	],
};

export const account = (state = initialState, action: { type: any; payload: any; }) => {
	switch (action.type) {
		case GET_ACCOUNT_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				accounts: [
					{
						account: action.payload,
						balance: action.payload,
					},
				],
			};
		default:
			return state;
	}
};
