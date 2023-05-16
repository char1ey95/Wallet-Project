import CryptoModule from '@crypto/crypto'
import DigitalSignature from '@wallet/digitalSignature'

describe('DigitalSignature', () => {
    let cryptoModule: CryptoModule
    let digitalSignature: DigitalSignature

    beforeEach(() => {
        cryptoModule = new CryptoModule()
        digitalSignature = new DigitalSignature(cryptoModule)
    })

    describe('createMnemonic', () => {
        it("니모닉의 단어 갯수가 12개인가", () => {
            const mnemonic = digitalSignature.createMnemonic()
            expect(mnemonic.split(" ").length).toBe(12)
        })
    })

    describe('createPrivateKeyByMnemonic', () => {
        it("니모닉으로 만든 개인키가 64글자인가", () => {
            const mnemonic = digitalSignature.createMnemonic()
            const privateKey = digitalSignature.createPrivateKeyByMnemonic(mnemonic)
            expect(privateKey.length).toBe(64)
        })
    })

    describe('createPrivateKey', () => {
        it('개인키의 길이가 64글자인가', () => {
            const privateKey = digitalSignature.createPrivateKey()
            expect(privateKey.length).toBe(64)
        })
    })

    describe('createPublicKey', () => {
        it('공개키의 길이가 66글자인가', () => {
            const privateKey = digitalSignature.createPrivateKey()
            const publicKey = digitalSignature.createPublicKey(privateKey)
            expect(publicKey.length).toBe(66)
        })
    })

    describe('createAccount', () => {
        it('계정의 길이는 40글자인가', () => {
            const privateKey = digitalSignature.createPrivateKey()
            const publicKey = digitalSignature.createPublicKey(privateKey)
            const account = digitalSignature.createAccount(publicKey)
            expect(account.length).toBe(40)
        })
    })
})