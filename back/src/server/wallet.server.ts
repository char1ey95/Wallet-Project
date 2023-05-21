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

    assistLogin(result: any){
        const { signature, accountsNumber } = result
        return { signature, accountsNumber }
    }

    async postLogin(req: Request, res: Response) {
        try {
            const { masterKey, password } = req.body
            const hash = this.crypto.SHA256(masterKey + password)
            const result = await this.model.findOne({ where: { signature: hash }, nest: true, raw: true })
            const { signature, accountsNumber } = this.assistLogin(result)
            const wallet = this.wallet.recreateByMasterKey(masterKey, accountsNumber)
            res.cookie("signature", signature).json({ wallet, accountsNumber })
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
            const { signature } = result.dataValues
            const account = this.wallet.createByMasterKey(masterKey, 1)
            account.balance = 0
            if (!result.dataValues) throw new Error
            res.cookie("signature", signature).json({ account }).status(201)
        } catch (e) {
            if (e instanceof Error)
                console.log(e.message)
            res.json({ failed: "실패" })
        }
    }

    async postCreateAccount(req: Request, res: Response) {
        try {
            const { masterKey, index, signature } = req.body
            const result = await this.model.update({ accountsNumber: index }, { where: { signature } })
            if (result[0] === 0) throw new Error("계정 생성에 실패했습니다.")
            const accountsNumber = await this.model.findOne({ where: { signature }, raw: true, nest: true, attributes: ["accountsNumber"] })
            const account = this.wallet.createByMasterKey(masterKey, index)
            res.json({ wallet: { ...account, balance: 0 }, accountsNumber })
        } catch (e) {
            if (e instanceof Error)
                res.json({ error: e.message })
        }
    }

    async postTransaction(req: Request, res: Response) {
        try {
            const { sender, received, amount } = req.body
            const { publicKey, privateKey } = this.wallet.get(sender)
            console.log(publicKey, privateKey)
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

    async postMnemonic(req: Request, res: Response) {
        try {
            const { mnemonics } = req.body
            const mnemonic = mnemonics.join(" ")
            const masterKey = this.wallet.getMasterKey(mnemonic)
            res.json({ mnemonics, masterKey })
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }
}

export default WalletServer