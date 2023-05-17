import styled from 'styled-components'
import { EllipseBtn } from '../../../common/button'
import { DarkInput } from '../../../common/input'
import request from "../../../utils/request"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/rootState"
import { MouseEvent } from 'react'
import { mineSuccess } from "../../../store/account"

const AssetsFunctionsWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;

    & > input {
        margin-bottom: 1.5rem;
    }

    & > button {
        margin-top: 2rem;
    }
`

export const AssetsFunctions = () => {
    const { accounts, selectedAccount } = useSelector((state: RootState) => state.accounts);
    const dispatch = useDispatch()

    const getAmount = async () => {
        try {
            const { data } = await request.get(`/balance/${selectedAccount.account}`)
            dispatch(mineSuccess(data))
        } catch (e) {
            console.log(e)
        }
    }

    const mineBlock = async () => {
        try {
            const { data } = await request.post('/mineBlock', { account: selectedAccount.account })
            getAmount()
            alert('블럭이 생성되었습니다!')
        } catch (e) {
            alert('블럭을 생성하지 못하였습니다!')
        }
    }

    const handleClickMine = (e: MouseEvent) => {
        mineBlock()
    }

    return (
        <AssetsFunctionsWrapper>
            <DarkInput placeholder='송금할 계좌를 입력해주세요' />
            <EllipseBtn type="submit">송금하기</EllipseBtn>
            <EllipseBtn type="button" onClick={handleClickMine}>채굴하기</EllipseBtn>
        </AssetsFunctionsWrapper>
    )
}