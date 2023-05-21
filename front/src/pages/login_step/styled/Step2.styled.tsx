import styled from "styled-components"

export const Step2_MnemonicWrap = styled.div`
    width: 80%;
    border: 1px solid ${props => props.theme.white};
    border-radius: 1rem;
    background-color: ${props => props.theme.grey};
`

export const Step2_Mnemonic = styled.div`
    display: inline-block;
    width: 50%;

    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    line-height: 3rem;
`