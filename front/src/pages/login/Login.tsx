import { Icon } from "@iconify/react"
import { EllipseBtn } from "../../common/button"
import { DarkInput } from "../../common/input"
import { LoginBoxWrapper, LoginBtnWrap, LoginForgotWrap, LoginHeaderIcon, LoginHeaderMainContent, LoginHeaderSubContent, LoginHeaderWrapper, LoginInputDescriptionBox, LoginInputDescriptionBoxWrap, LoginInputWrap } from './styled'

export const Login = () => {
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
                <DarkInput type='password' placeholder='Please Enter Your Password'/>
            </LoginInputWrap>
            <LoginBtnWrap>
                <EllipseBtn>Unlock</EllipseBtn>
            </LoginBtnWrap>
            <LoginForgotWrap>
                <EllipseBtn color={'black'}>Forgot password</EllipseBtn>
            </LoginForgotWrap>
        </LoginBoxWrapper>
        </>
    )
}