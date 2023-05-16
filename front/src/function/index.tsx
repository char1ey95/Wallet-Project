import request from "../utils/request"

export const sendETH = async () => {
    try {
        const { data } = await request.post('/transaction', { sender: "", received: "", amount: 0 })
    } catch (e) {
        alert('송금에 실패하였습니다.')
    }
}

export const createAccount = async () => {
    try {
        const { data } = await request.get("/wallet");
    } catch (e) { }
};