import Wallet from '@wallet/wallet';
import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';

class WalletServer {
    constructor(private readonly wallet: Wallet, private readonly axios: AxiosInstance) { }

    async getWallet(req: Request, res: Response) {
        try {
            const accountsList = this.wallet.getAccounts()
            res.json(accountsList)
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
            res.status(500)
        }
    }

    async getAllWallet(req: Request, res: Response) {
        try {
            const accountsList = this.wallet.getAccountInfo()
            res.json({ accountsList })
        } catch (e) {
            if (e instanceof Error) res.status(500).send(e.message)
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

    async getCreateWallet(req: Request, res: Response) {
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