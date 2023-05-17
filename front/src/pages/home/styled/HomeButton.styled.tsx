import styled from "styled-components";
import { EllipseBtn } from "../../../common/button";
import { useNavigate } from "react-router-dom";
import { MouseEvent } from "react";

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
    const navigate = useNavigate()
    
    const handleClickCreate = (e: MouseEvent) => {
        navigate('/step2')
    }

    const handleClickAlready = (e: MouseEvent) => {
        navigate('/step1')
    }

    return (
        <HomeButtonWrap>
            <EllipseBtn onClick={handleClickCreate}>Create new wallet</EllipseBtn>
            <EllipseBtn onClick={handleClickAlready}>I already have a wallet</EllipseBtn>
        </HomeButtonWrap>
    )
}