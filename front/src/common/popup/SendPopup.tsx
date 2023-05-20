import { SendPopupWrap, SendPopupSubjectWrap, SendPopupSubject, SendPopupInputWrap, SendPopupUnit, SendPopupConfirmWrap } from "./styled"
import { ConfirmBtn } from "../button"
import { DarkInput } from "../input"
import React, { useState } from "react"
import request from "../../utils/request"
import { useSelector } from "react-redux"
import { RootState } from "../../store/rootState"

interface SendPopupProps {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    receiver: string
    getBalance: (account: string) => Promise<void>
}

export const SendPopup = ({ setOpen, receiver, getBalance }: SendPopupProps) => {
    const { account } = useSelector((state: RootState) => state)
    const [amount, setAmount] = useState(0)

    const handleClickOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const button = e.target as HTMLButtonElement
        if(button.innerHTML === "취소") return setOpen(false)
        sendTransaction(account.accountInfo.account, receiver, amount)
        getBalance(account.accountInfo.account)
        setOpen(false)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setAmount(parseInt(e.target.value))
    }

    const sendTransaction = async (sender: string, received: string, amount: number) => {
        try {
            if( account.accountInfo.balance < amount) return alert("잔액이 부족합니다.")
            const { data } = await request.post('/transaction', { sender, received, amount })
            if(data.transaction) alert("송금이 정상적으로 요청되었습니다.")
        } catch (e) {
            if( e instanceof Error)
                alert("송금에 실패했습니다.")
        }
    }

    return (
        <SendPopupWrap>
            <SendPopupSubjectWrap>
                <SendPopupSubject>얼마를 송금 하시겠습니까?</SendPopupSubject>
            </SendPopupSubjectWrap>
            <SendPopupInputWrap>
                <DarkInput onChange={handleChange} placeholder="금액을 입력해주세요" width={"60%"} height={"3rem"} />
                <SendPopupUnit>ETH</SendPopupUnit>
            </SendPopupInputWrap>
            <SendPopupConfirmWrap>
                <ConfirmBtn onClick={handleClickOpen}>확인</ConfirmBtn>
                <ConfirmBtn onClick={handleClickOpen}>취소</ConfirmBtn>
            </SendPopupConfirmWrap>
        </SendPopupWrap>
    )
}