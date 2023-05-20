import { Router } from "express"
import walletServer from './server.module'

const router = Router()

router.get('/wallet', (req, res) => walletServer.getWallet(req, res))
router.get('/newAccount', (req, res) => walletServer.getCreateAccount(req, res))
router.get('/walletInfo', (req, res) => walletServer.getAllAccountInfo(req, res))
router.get('/mnemonic', (req, res) => walletServer.getMnemonic(req, res))

router.post('/join', (req, res) => walletServer.postJoin(req, res))
router.post('/createAccount', (req, res) => walletServer.postCreateAccount(req, res))
router.post('/mineBlock', (req, res) => walletServer.postMining(req, res))
router.post('/transaction', (req, res) => walletServer.postTransaction(req, res))

router.get('/balance/:account', (req, res) => walletServer.getAccountBalance(req, res))

export default router