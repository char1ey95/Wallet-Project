import CryptoModule from "@crypto/crypto"
import DigitalSignature from "@wallet/digitalSignature"
import Wallet from "@wallet/wallet"

describe('Wallet', () => {
    let crypto: CryptoModule
    let digitalSignature: DigitalSignature
    let wallet: Wallet

    beforeEach(() => {
        crypto = new CryptoModule()
        digitalSignature = new DigitalSignature(crypto)
        wallet = new Wallet(digitalSignature)
    })
    describe('create', () => {

    })

    describe('set', () => {

    })

    describe('getAccounts', () => {

    })

    describe('get', () => {

    })

    describe('getPrivate', () => {

    })

    describe('receipt', () => {

    })

    describe('sign', () => {

    })

    describe('verify', () => {

    })

    describe('getMnemonic', () => {
        it('니모닉이 잘 생성 되는가?', () => {
            const mnemonic = wallet.getMnemonic()
            expect(mnemonic.length).toBe(12)
        })
    })
})