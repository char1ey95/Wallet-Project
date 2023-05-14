import styled from 'styled-components'
import { DarkInput } from '../../../common/input'
import { EllipseBtn } from '../../../common/button'

const LoginBoxWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0.5rem 0;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
`

const LoginInputWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const LoginInputDescriptionBoxWrap = styled.div`
    padding: 0.25rem 0.5rem;
    width: 90%;
    box-sizing: border-box;
`

const LoginInputDescriptionBox = styled.div`
    
`

const LoginBtnWrap = styled.h6`
    display: flex;
    justify-content: center;
    width: 100%;
`

const LoginForgotWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const LoginBox = () => {
    return(
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
    )
}