// import { InitialState } from "./account/account.interface";
import { AccountState, MnemonicState, WalletState } from "./interface";

export interface RootState {
    mnemonic: MnemonicState
    account: AccountState
    wallet: WalletState
}
