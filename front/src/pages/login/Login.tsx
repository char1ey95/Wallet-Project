import { LoginBoxWrapper, LoginBtnWrap, LoginForgotWrap, LoginHeaderIcon, LoginHeaderMainContent, LoginHeaderSubContent, LoginHeaderWrapper, LoginInputDescriptionBox, LoginInputDescriptionBoxWrap, LoginInputWrap } from './styled'
import { Icon } from "@iconify/react"
import { EllipseBtn } from "../../common/button"
import { DarkInput } from "../../common/input"
import React from "react"

export const Login = () => {

    const handleClickForgot = (e: React.MouseEvent) => {
        alert("어쩔수 없습니다..")
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
                    <DarkInput type='password' placeholder='Please Enter Your Password' />
                </LoginInputWrap>
                <LoginBtnWrap>
                    <EllipseBtn>Unlock</EllipseBtn>
                </LoginBtnWrap>
                <LoginForgotWrap>
                    <EllipseBtn color={'black'} onClick={handleClickForgot}>Forgot password</EllipseBtn>
                </LoginForgotWrap>
            </LoginBoxWrapper>
        </>
    )
}