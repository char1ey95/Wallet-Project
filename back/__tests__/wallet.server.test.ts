import CryptoModule from '@crypto/crypto'
import WalletServer from '@server/wallet.server'
import request from '@utils/request'
import DigitalSignature from '@wallet/digitalSignature'
import Wallet from '@wallet/wallet'
import { Request, Response } from 'express';
import { AxiosInstance } from 'axios'

describe('WalletServer', () => {
    let crypto: CryptoModule
    let digitalSignature: DigitalSignature
    let wallet: Wallet
    let axios: AxiosInstance
    let walletServer: WalletServer

    beforeAll(() => {
        crypto = new CryptoModule()
        digitalSignature = new DigitalSignature(crypto)
        wallet = new Wallet(digitalSignature)
        axios = request
        walletServer = new WalletServer(wallet, axios)
    })
    describe('getWallet', () => {
        it('계정을 잘 반환하는가?', async () => {
            const req: Request = {} as Request;
            const res: Response = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            } as unknown as Response;

            const accountsList = [
                '96d47cda621dd4d3e714feee7f709f66d579f54d',
                '705ff22803babb9a4c6db25cd1f0798d502d23c4']
            wallet.getAccounts = jest.fn().mockReturnValue(accountsList)

            await walletServer.getWallet(req, res)

            expect(res.json).toHaveBeenCalledWith(accountsList)
        })
    })

    describe('getAccountBalance', () => {
        it('잔액이 잘 반환되는가?', async () => {
            const account = { account: '96d47cda621dd4d3e714feee7f709f66d579f54d' };
            const req: Request = { params: { account: account.account } } as unknown as Request;
            const res: Response = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            } as unknown as Response;

            wallet.get = jest.fn().mockReturnValue(account);

            const balance = 500;
            axios.post = jest.fn().mockResolvedValue({ data: { balance } });

            await walletServer.getAccountBalance(req, res);

            expect(res.json).toHaveBeenCalledWith({ ...account, balance });
        });
    })

    describe('postWallet', () => {
        it('계정을 생성하고 잔액을 잘 반환하는가?', async () => {
            const createdAccount = { account: '96d47cda621dd4d3e714feee7f709f66d579f54d' };
            const req: Request = {} as Request;
            const res: Response = {
                json: jest.fn(),
                status: jest.fn().mockReturnThis(),
                send: jest.fn(),
            } as unknown as Response;

            wallet.create = jest.fn().mockReturnValue(createdAccount);

            const balance = 1000;
            axios.post = jest.fn().mockResolvedValue({ data: { balance } });

            await walletServer.postWallet(req, res);

            expect(res.json).toHaveBeenCalledWith({ ...createdAccount, balance });
        });
    })

    describe('postTransaction', () => {

    })
})