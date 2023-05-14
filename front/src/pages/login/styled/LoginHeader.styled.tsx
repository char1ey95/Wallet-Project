import { Icon } from '@iconify/react'
import styled from 'styled-components'

const LoginHeaderWrapper = styled.header`
    padding: 1rem;
    min-height: 10rem;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
`

const LoginHeaderIcon = styled.div`
    width: 100%;
    height: 3.5rem;
    & > svg {
        color: #FFFFFF;
        font-size: 3.5rem;
        background-color: ${props => props.theme.yellow.color};
        border-radius: 0.75rem;
    }
`

const LoginHeaderMainContent = styled.h2`
    margin-top: 1rem;
    font-family: 'Gmarket';
`

const LoginHeaderSubContent = styled.h3`
    margin-top: 0.5rem;
    font-family: 'Gmarket';
    color: #9c9c9c;
`

export const LoginHeader = () => {
    return(
        <LoginHeaderWrapper>
            <LoginHeaderIcon>
                <Icon icon={'material-symbols:account-balance-wallet'}></Icon>
            </LoginHeaderIcon>
            <LoginHeaderMainContent>Char1ies Wallet</LoginHeaderMainContent>
            <LoginHeaderSubContent>Extension</LoginHeaderSubContent>
        </LoginHeaderWrapper>
    )
}