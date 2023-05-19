import { InitialState } from "./account/account.interface";
import { WalletState } from "./interface";

export interface RootState {
    accounts: InitialState
    wallet: WalletState
}