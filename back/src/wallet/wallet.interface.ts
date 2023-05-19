import { SignatureInput } from "elliptic"

export type MasterKey = string
export type KeyIndex = number
export type MasterKeyIndex = string

export class Sender {
    publicKey?: string
    account!: string
}

export class Receipt {
    sender!: Sender
    received!: string
    amount!: number
    signature?: SignatureInput
}

export class Accounts {
    privateKey!: string
    publicKey!: string
    account!: string
    balance?: number
}
