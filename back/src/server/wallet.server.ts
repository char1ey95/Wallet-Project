import CryptoModule from "@crypto/crypto";
import Wallet from '@wallet/wallet';
import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { Model, ModelCtor } from "sequelize";

class WalletServer {
    constructor(
        private readonly wallet: Wallet,
        private readonly axios: AxiosInstance,
        private readonly crypto: CryptoModule,
        private readonly model: ModelCtor<Model<any, any>>
    ) { }

    async getWallet(req: Request, res: Response) {
        try {
            const accountsList = this.wallet.getAccounts()
            res.json(accountsList)
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }

    async getAllAccountInfo(req: Request, res: Response) {
        try {
            const accountsList = this.wallet.getAccountInfo()
            res.json({ accountsList })
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }

    async getMnemonic(req: Request, res: Response) {
        try {
            const mnemonic = this.wallet.getMnemonic()
            const mnemonics = mnemonic.split(" ")
            const masterKey = this.wallet.getMasterKey(mnemonic)
            res.json({ mnemonics, masterKey })
        } catch (e) {
            res.status(500)
        }
    }

    async getAccountBalance(req: Request, res: Response) {
        try {
            const account = this.wallet.get(req.params.account)
            const { data: { balance } } = await this.axios.post(`/getBalance`, {
                account: account.account
            })
            res.json({ ...account, balance })
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }

    async getCreateAccount(req: Request, res: Response) {
        try {
            const account = this.wallet.create()
            const { data: { balance } } = await this.axios.post(`/getBalance`, {
                account: account.account
            })
            res.json({ ...account, balance })
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }

    async postJoin(req: Request, res: Response) {
        try {
            const { masterKey, password } = req.body
            const hash = this.crypto.SHA256(masterKey + password)
            const result = await this.model.create({ signature: hash })
            const account = this.wallet.createByMasterKey(masterKey, 1)
            account.balance = 0
            console.log(account)
            if (!result.dataValues) throw new Error
            res.json({ account }).status(201)
        } catch (e) {
            if (e instanceof Error)
                console.log(e.message)
            res.json({ failed: "실패" })
        }
    }

    async postTransaction(req: Request, res: Response) {
        try {
            const { sender, received, amount } = req.body
            const { publicKey, privateKey } = this.wallet.get(sender)
            const receipt = this.wallet.sign({
                sender: {
                    account: sender,
                    publicKey,
                },
                received,
                amount,
            }, privateKey)
            const tx = await this.axios.post(`/transaction`, { receipt })
            res.json(tx.data)
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }

    async postMining(req: Request, res: Response) {
        try {
            const { account } = req.body
            const { data } = await this.axios.post('/mineBlock', { account })
            res.json({ data })
        } catch (e) {
            res.status(500)
        }
    }
}

export default WalletServer