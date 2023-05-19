import { combineReducers } from "redux"
import { mnemonic } from "./mnemonic"
import { account } from "./account"
import { wallet } from "./wallet"

export const rootReducer = combineReducers({
    mnemonic, account, wallet
})