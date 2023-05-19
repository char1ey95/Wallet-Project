// import { InitialState } from "./account/account.interface";
import { MnemonicState, WalletState } from "./interface";

export interface RootState {
    // accounts: InitialState
    wallet: WalletState
    mnemonic: MnemonicState
}
