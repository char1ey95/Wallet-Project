import styled from 'styled-components'

export const LoginHeaderWrapper = styled.header`
    padding: 1rem;
    min-height: 10rem;
    width: 100%;
    height: 50%;
    box-sizing: border-box;
`

export const LoginHeaderIcon = styled.div`
    width: 100%;
    height: 3.5rem;
    & > svg {
        color: #FFFFFF;
        font-size: 3.5rem;
        background-color: ${props => props.theme.main.color};
        border-radius: 0.75rem;
    }
`

export const LoginHeaderMainContent = styled.h2`
    margin-top: 1rem;
    font-family: ${props => props.theme.font};
`

export const LoginHeaderSubContent = styled.h3`
    margin-top: 0.5rem;
    font-family: ${props => props.theme.font};
    color: #9c9c9c;
`