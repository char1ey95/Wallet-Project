// import { AccountState } from "./account.interface";
// import { GET_ACCOUNT_SUCCESS, SELECT_ACCOUNT_SUCCESS, CREATE_ACCOUNT_SUCCESS, MINING_SUCCESS, CREATE_ACCOUNT_FAILURE, GET_ACCOUNT_FAILURE, MINING_FAILURE, SELECT_ACCOUNT_FAILURE, MNEMONIC_FAILURE, MNEMONIC_SUCCESS} from "./selector";

// export const createAccount = (action: AccountState) => ({type: CREATE_ACCOUNT_SUCCESS, payload: action})
// export const createAccountFail = (action: AccountState) => ({type: CREATE_ACCOUNT_FAILURE, payload: action})

// export const selectAccount = (action: AccountState) => ({type: SELECT_ACCOUNT_SUCCESS, payload: action})
// export const selectAccountFail = (action: AccountState) => ({type: SELECT_ACCOUNT_FAILURE, payload: action})

// export const mineSuccess = (action: AccountState) => ({type: MINING_SUCCESS, payload: action})
// export const mineSuccessFail = (action: AccountState) => ({type: MINING_FAILURE, payload: action})

// export const getAccounts = (action: AccountState[]) => ({type: GET_ACCOUNT_SUCCESS, payload: action})
// export const getAccountsFail = (action: AccountState[]) => ({type: GET_ACCOUNT_FAILURE, payload: action})

// export const getMnemonics = (action: string[]) => ({type: MNEMONIC_SUCCESS, payload: action})
// export const getMnemonicFail = (action: string[]) => ({type: MNEMONIC_FAILURE, payload: action})