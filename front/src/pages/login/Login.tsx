import { LoginBoxWrapper, LoginBtnWrap, LoginForgotWrap, LoginHeaderIcon, LoginHeaderMainContent, LoginHeaderSubContent, LoginHeaderWrapper, LoginInputDescriptionBox, LoginInputDescriptionBoxWrap, LoginInputWrap } from './styled'
import { Icon } from "@iconify/react"
import { EllipseBtn } from "../../common/button"
import { DarkInput } from "../../common/input"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/rootState"
import request from "../../utils/request"
import { GET_WALLET_FAILURE, GET_WALLET_REQUEST, GET_WALLET_SUCCESS } from "../../store/wallet"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const { mnemonic } = useSelector((state: RootState) => state)
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const postLogin = async (password: string) => {
        dispatch({ type: GET_WALLET_REQUEST })
        try {
            const { data } = await request.post('/login', { masterKey: mnemonic.masterKey, password: password })
            dispatch({ type: GET_WALLET_SUCCESS, payload: data })
        } catch (e) {
            if (e instanceof Error)
                dispatch({ type: GET_WALLET_FAILURE, payload: e.message })
        }
    }

    const handleClickForgot = (e: React.MouseEvent) => {
        alert("어쩔수 없습니다..")
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        postLogin(password)
        navigate('/assets')
    }


    return (
        <>
            <LoginHeaderWrapper>
                <LoginHeaderIcon>
                    <Icon icon={'material-symbols:account-balance-wallet'}></Icon>
                </LoginHeaderIcon>
                <LoginHeaderMainContent>Char1ies Wallet</LoginHeaderMainContent>
                <LoginHeaderSubContent>Extension</LoginHeaderSubContent>
            </LoginHeaderWrapper>
            <LoginBoxWrapper>
                <LoginInputWrap>
                    <LoginInputDescriptionBoxWrap>
                        <LoginInputDescriptionBox>Unlock with password</LoginInputDescriptionBox>
                    </LoginInputDescriptionBoxWrap>
                    <DarkInput
                        onChange={handleChangePassword}
                        type='password'
                        placeholder='Please Enter Your Password'
                    />
                </LoginInputWrap>
                <LoginBtnWrap>
                    <EllipseBtn onClick={handleClickLogin} >Unlock</EllipseBtn>
                </LoginBtnWrap>
                <LoginForgotWrap>
                    <EllipseBtn color={'black'} onClick={handleClickForgot}>Forgot password</EllipseBtn>
                </LoginForgotWrap>
            </LoginBoxWrapper>
        </>
    )
}