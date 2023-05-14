import { Icon } from '@iconify/react'
import styled from 'styled-components'

const LoginHeaderWrapper = styled.header`
    padding: 1rem;
    min-height: 10rem;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
`

const LoginHeaderIconWrap = styled.div`
    width: 100%;
    height: 3.5rem;
    & > svg {
        color: #FFFFFF;
        font-size: 3.5rem;
        background-color: ${props => props.theme.yellow.color};
        border-radius: 0.5rem;
    }
`

export const LoginHeader = () => {
    return(
        <LoginHeaderWrapper>
            <LoginHeaderIconWrap>
                <Icon icon={'material-symbols:account-balance-wallet'}></Icon>
            </LoginHeaderIconWrap>
        </LoginHeaderWrapper>
    )
}