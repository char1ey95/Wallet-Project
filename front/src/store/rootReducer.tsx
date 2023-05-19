import { combineReducers } from "redux"
// import { accounts } from "./account"
import { wallet } from "./wallet"
import { mnemonic } from "./mnemonic"


export const rootReducer = combineReducers({
    wallet, mnemonic
})