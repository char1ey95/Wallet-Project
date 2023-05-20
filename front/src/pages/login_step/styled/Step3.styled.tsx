import styled from "styled-components"

export const Step3_SelectMnemonicWrap = styled.div`
    display: grid;
    grid-template-rows: repeat(4);
    grid-template-columns: repeat(3, 6rem);
    justify-content: center;
    align-content: space-evenly;
    grid-row-gap: 1rem;
    grid-column-gap: 2rem;
    width: 100%;
    height: 100%;

    & > div {
        transition: all 0.2s;
    }

    & > .select {
        color: ${props => props.theme.white};
        background-color: ${props => props.theme.main.color};
    }
`

export const Step3_SelectMnemonic = styled.div`
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    color: ${props => props.theme.black};
    font-weight: 700;
    border-radius: 1rem;
    background-color: ${props => props.theme.white};
`