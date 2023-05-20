import styled from "styled-components"

export const SendPopupWrap = styled.div`
    position: absolute;
    top: 14.5rem;
    left: 2rem;
    width: 20rem;
    height: 11rem;
    background: ${props => props.theme.black};
    border: 4px solid ${props => props.theme.white};
    border-radius: 0.5rem;
    z-index: 998;
`
export const SendPopupSubjectWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    width: 100%;
    height: 2.5rem;
`
export const SendPopupSubject = styled.h3`
    width: 80%;
    text-align: center;
`
export const SendPopupInputWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5rem;
`
export const SendPopupUnit = styled.h2`
    margin-left: 2%;
    width: 10%;
`
export const SendPopupConfirmWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3rem;
    
    & > button:nth-child(2) {
        margin-left: 1rem;
    }
`