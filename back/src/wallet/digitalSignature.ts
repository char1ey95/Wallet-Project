import { randomBytes } from "crypto"
import elliptic from "elliptic"
import CryptoModule from 'crypto/crypto'
import { Receipt } from "./wallet.interface"
import * as bip39 from 'bip39'

class DigitalSignature {
    private readonly ec = new elliptic.ec("secp256k1")

    constructor(private readonly crypto: CryptoModule) {}

    createMnemonic() {
        bip39.setDefaultWordlist("korean")
        const bits = 128
        const randomBytes = require("crypto").randomBytes(bits/8)
        const entropy = randomBytes.toString("hex")
        const mnemonic = bip39.entropyToMnemonic(entropy)

        return mnemonic
    }

    createMasterKey(mnemonic: string) {
        const masterKey = this.crypto.SHA256(mnemonic)
        return masterKey
    }

    createPrivateKey() {
        return randomBytes(32).toString("hex")
    }

    createPublicKey(privateKey: string) {
        const keyPair = this.ec.keyFromPrivate(privateKey)
        const publicKey = keyPair.getPublic().encode("hex", true) // 32 byte + 1byte

        return publicKey
    }

    createAccount(publicKey: string) {
        const buffer = Buffer.from(publicKey)
        const account = buffer.slice(26).toString()
        return account
    }

    sign(privateKey: string, receipt: Receipt): Receipt {
        const keyPair = this.ec.keyFromPrivate(privateKey)
        const receiptHash = this.crypto.createReceiptHash(receipt)
        const signature = keyPair.sign(receiptHash, "hex").toDER("hex") // hex
        receipt.signature = signature
        return receipt
    }

    verify(receipt: Receipt): boolean {
        const {
            sender: { publicKey },
            signature,
        } = receipt

        if (!publicKey || !signature) throw new Error("receipt 내용이 올바르지 않습니다.")
        const receiptHash = this.crypto.createReceiptHash(receipt)
        return this.ec.verify(receiptHash, signature, this.ec.keyFromPublic(publicKey, "hex"))
    }
}

export default DigitalSignature
