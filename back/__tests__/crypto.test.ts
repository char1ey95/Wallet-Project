import CryptoModule from '@crypto/crypto'
import { Receipt, Sender } from '@wallet/wallet.interface'

describe('CryptoModule', () => {
    let cryptoModule: CryptoModule
    beforeEach(() => {
        cryptoModule = new CryptoModule()
    })
    describe('SHA256', () => {
        it('데이터의 해쉬화 길이가 64 글자인가', () => {
            const data = '비극 상금 집안 금연 도저히 저곳 기획 기원 작품 계약 찌꺼기 중국'
            const hash = cryptoModule.SHA256(data)
            expect(hash.length).toBe(64)
        })
        it('데이터의 순서가 바뀌면 다른 해쉬값을 가지는가', () => {
            const data1 = '비극 상금 집안 금연 도저히 저곳 기획 기원 작품 계약 찌꺼기 중국'
            const data2 = '비극 상금 집안 금연 도저히 저곳 기획 기원 작품 계약 중국 찌꺼기'
            const hash1 = cryptoModule.SHA256(data1)
            const hash2 = cryptoModule.SHA256(data2)
            console.log(hash1)
            expect(hash1 === hash2).toBeFalsy()
        })
    })

    describe('createReceiptHash', () => {
        const receipt: Receipt = {
            sender: {
                publicKey: 'd553fcbe6e751b3c9877b331708b1a34a9bf1a81b1b6ffcb68d5f97c957b3c90',
                account:'01'.repeat(20)
            },
            received: '0'.repeat(40),
            amount: 20
        }
        it('영수증 Hash값의 길이가 64글자인가?', () => {
            const receiptHash = cryptoModule.createReceiptHash(receipt)
            expect(receiptHash.length).toBe(64)
        })

        it('영수증의 publicKey의 길이가 올바르지 않으면 에러를 출력하는가', () => {
            receipt.sender.publicKey = 'fcbe6e751b3c9877b331708b1a34a9bf1a81b1b6ffcb68d97c957b3c9'
            const receiptHash = cryptoModule.createReceiptHash(receipt)
            console.log(receiptHash)
        })
    })
})