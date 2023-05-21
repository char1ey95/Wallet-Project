import { ActionType } from "../interface";
import { MnemonicState } from "../interface/mnemonic.interface";
import { MNEMONIC_REQUEST, MNEMONIC_SUCCESS, MNEMONIC_FAILURE, POST_MNEMONIC_FAILURE, POST_MNEMONIC_REQUEST, POST_MNEMONIC_SUCCESS } from "./types";

const initialState: MnemonicState = {
	isLoading: true,
	isError: null,
	mnemonics: [""],
	masterKey: ""
};

export const mnemonic = (state = initialState, action: { type: ActionType; payload: MnemonicState }) => {
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
				isError: action.payload,
			}
		case POST_MNEMONIC_REQUEST:
			return {
				...state,
				isLoading: true
			}
		case POST_MNEMONIC_SUCCESS:
			return {
				...state,
				isLoading: false,
				isError: null,
				mnemonics: action.payload.mnemonics,
				masterKey: action.payload.masterKey
			}
		case POST_MNEMONIC_FAILURE:
			return {
				...state,
				isLoading: false,
				isError: action.payload.isError,
			}
		default:
			return state;
	}
};
