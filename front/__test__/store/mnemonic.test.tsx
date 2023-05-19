import { requestMnemonic, successMnemonic, failureMnemonic, MNEMONIC_REQUEST, MNEMONIC_SUCCESS, MNEMONIC_FAILURE} from "../../src/store/mnemonic"

describe("mnemonic", () => {
    describe("requestMnemonic", () => {
        it("action값에 따라서 올바르게 작동하는가", () => {
            const action = MNEMONIC_REQUEST
        })
    })
    describe("successMnemonic", () => {
        it("action값에 따라서 올바르게 작동하는가", () => {
            const action = MNEMONIC_SUCCESS
        })
    })
    describe("failureMnemonic", () => {
        it("action값에 따라서 올바르게 작동하는가", () => {
            const action = MNEMONIC_FAILURE
        })
    })
})