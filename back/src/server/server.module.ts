import Wallet from '@wallet/wallet';
import WalletServer from './wallet.server';
import DigitalSignature from '@wallet/digitalSignature';
import CryptoModule from '@crypto/crypto';
import request from 'utils/request';
import sequelize from "../../model";

const { WalletModel } = sequelize.models
const crypto = new CryptoModule()
const digitalSignature = new DigitalSignature(crypto)
const wallet = new Wallet(digitalSignature)
const walletServer = new WalletServer(wallet, request, crypto, WalletModel)

export default walletServer