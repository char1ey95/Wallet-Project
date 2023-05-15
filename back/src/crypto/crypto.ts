import cryptojs from 'crypto-js'
import { Hash } from './crypto.interface'
import { Receipt } from 'wallet/wallet.interface'

class CryptoModule {

    public SHA256(data: string): Hash {
        const hash = cryptojs.SHA256(data).toString()
        return hash
    }

    public createReceiptHash(receipt: Receipt) {
        const {
            sender: { publicKey },
            received,
            amount,
        } = receipt

        if (publicKey === undefined || publicKey.length < 64) throw new Error("publicKey가 올바르지 않습니다.")

        const message = [publicKey, received, amount].join("")
        return this.SHA256(message)
    }
}

export default CryptoModule