import { LoginBoxWrapper, LoginBtnWrap, LoginForgotWrap, LoginHeaderIcon, LoginHeaderMainContent, LoginHeaderSubContent, LoginHeaderWrapper, LoginInputDescriptionBox, LoginInputDescriptionBoxWrap, LoginInputWrap } from './styled'
import { Icon } from "@iconify/react"
import { EllipseBtn } from "../../common/button"
import { DarkInput } from "../../common/input"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../store/rootState"
import request from "../../utils/request"

export const Login = () => {
    const { mnemonic } = useSelector((state: RootState) => state)
    const [password, setPassword] = useState("")

    const postLogin = async (password: string) => {
        try {
            const { data } = await request.post('/login', { masterKey: mnemonic.masterKey, password: password})
            console.log(data)
        } catch (error) {
            
        }
    }

    const handleClickForgot = (e: React.MouseEvent) => {
        alert("어쩔수 없습니다..")
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleClickLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        postLogin(password)
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