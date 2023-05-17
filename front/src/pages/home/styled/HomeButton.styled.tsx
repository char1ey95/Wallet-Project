import styled from "styled-components";
import { EllipseBtn } from "../../../common/button";

const HomeButtonWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;

    & > button {
        margin-top: 1rem;
    }
`

export const HomeButton = () => {
    return (
        <HomeButtonWrap>
            <EllipseBtn>Create new wallet</EllipseBtn>
            <EllipseBtn>I already have a wallet</EllipseBtn>
        </HomeButtonWrap>
    )
}