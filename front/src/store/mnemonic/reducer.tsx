import { MnemonicState } from "../interface/mnemonic.interface";
import { MNEMONIC_REQUEST, MNEMONIC_SUCCESS, MNEMONIC_FAILURE } from "./types";

const initialState: MnemonicState = {
	isLoading: true,
	isError: null,
	mnemonics: [""],
	masterKey: ""
};

export const mnemonic = (state = initialState, action: { type: string; payload: MnemonicState }) => {
	console.log("action::", action.payload)
	switch (action.type) {
		case MNEMONIC_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case MNEMONIC_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				mnemonics: action.payload.mnemonics,
				masterKey: action.payload.masterKey
			}
		case MNEMONIC_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		default:
			return state;
	}
};
