import { Router } from "express"
import walletServer from './server.module'

const router = Router()

router.get('/', (req, res) => walletServer.getWallet(req, res))
router.get('/wallet', (req, res) => walletServer.createWallet(req, res))

router.post('/transactoin', (req, res) => walletServer.postTransaction(req, res))
router.post('/mineBlock', (req, res) => walletServer.postMining(req, res))

router.get('/balance/:account', (req, res) => walletServer.getAccountBalance(req, res))

export default router