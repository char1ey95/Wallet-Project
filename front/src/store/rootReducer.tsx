import { combineReducers } from "redux"
import { accounts } from "./account"
import { wallet } from "./wallet"


export const rootReducer = combineReducers({
    accounts, wallet
})