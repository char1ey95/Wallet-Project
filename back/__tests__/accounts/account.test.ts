import * as bip39 from 'bip39'
import * as bip32 from 'bip32'

describe("Account", () => {
    describe("createMnemonic", () => {
        const bits = 128
        const randomBytes = require("crypto").randomBytes(bits/8)
        const entropy = randomBytes.toString("hex")
        bip39.setDefaultWordlist("korean")
        const mnemonic = bip39.entropyToMnemonic(entropy)
        it("니모닉의 단어 갯수가 12개인가", () => {
            console.log(mnemonic)
            expect(mnemonic.split(" ").length).toBe(12)
        })
    })

    describe("createRandomNumber", () => {
        const bits = 128
        const randomBytes = require("crypto").randomBytes(bits/8)
        const entropy = randomBytes.toString("hex")

        console.log(randomBytes)
        console.log(entropy)
    })
})