import styled from "styled-components"

export const Step2_MnemonicWrap = styled.div`
    width: 80%;
    height: 60%;
    border: 1px solid ${props => props.theme.white};
    border-radius: 1rem;
    background-color: ${props => props.theme.grey};
`

export const Step2_Mnemonic = styled.div`
    display: inline-block;
    width: 33%;
    height: 25%;
    font-weight: 700;
    text-align: center;
    line-height: 3rem;
`