import DigitalSignature from "./digitalSignature"
import { Accounts, KeyIndex, MasterKey, Receipt } from "./wallet.interface"

class Wallet {
    private readonly accounts: Accounts[] = []
    constructor(private readonly digitalSignature: DigitalSignature) { }

    public create(): Accounts {
        const privateKey = this.digitalSignature.createPrivateKey()
        const publicKey = this.digitalSignature.createPublicKey(privateKey)
        const account = this.digitalSignature.createAccount(publicKey)

        const accounts: Accounts = {
            account,
            publicKey,
            privateKey,
        }

        this.accounts.push(accounts)
        return accounts
    }

    public createByMasterKey(masterKey: MasterKey, index: KeyIndex): Accounts {
        const privateKey = this.digitalSignature.createPrivateKeyByMasterKey(masterKey + index.toString())
        const publicKey = this.digitalSignature.createPublicKey(privateKey)
        const account = this.digitalSignature.createAccount(publicKey)

        const accounts: Accounts = {
            account,
            publicKey,
            privateKey,
        }

        this.accounts.push(accounts)
        console.log("현재 지갑서버에 존재하는 계정", this.accounts)
        return accounts
    }

    public getMnemonic(): string{
        const mnemonic = this.digitalSignature.createMnemonic()
        return mnemonic
    }

    public getMasterKey(mnemonic: string): string {
        const masterKey = this.digitalSignature.createMasterKey(mnemonic)
        return masterKey
    }

    public getAccountInfo(): Accounts[] {
        return this.accounts
    }

    public set(privateKey: string) {
        const publicKey = this.digitalSignature.createPublicKey(privateKey)
        const account = this.digitalSignature.createAccount(publicKey)

        const accounts: Accounts = {
            account,
            publicKey,
            privateKey,
        }

        this.accounts.push(accounts)
        return accounts
    }

    public getAccounts() {
        const accounts = this.accounts.map((v) => v.account)
        return accounts
    }

    public get(account: string): Accounts {
        return this.accounts.filter((v)=> v.account === account)[0]
    }

    private getPrivate(account: string): string {
        return this.accounts.filter((v) => v.account === account)[0].privateKey
    }

    public receipt(received: string, amount: number) {
        const { account, publicKey, privateKey } = this.accounts[0]

        const sender = {
            account,
            publicKey,
        }

        const reciept = this.digitalSignature.sign(privateKey, {
            sender,
            received,
            amount,
        })

        return reciept
    }

    public sign(receipt: Receipt, privateKey: string) {
        return this.digitalSignature.sign(privateKey, receipt)
    }
    
    public verify(receipt: Receipt): boolean {
        return this.digitalSignature.verify(receipt)
    }
}

export default Wallet
