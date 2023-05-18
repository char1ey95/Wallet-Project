import styled, { keyframes } from "styled-components";

export const jump = keyframes`
    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-200%);
    }
`

export const LoadingWaveWrap = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 4rem;
    height: calc(3rem * 0.17);
    padding-top: calc(3rem * 0.34);

    & > div {
        margin: 0 0.2rem;
    }

    & > div:nth-child(1){
        animation: ${jump} 1s ease-in-out calc(1s*-0.45) infinite;
    }

    & > div:nth-child(2){
        animation: ${jump} 1s ease-in-out calc(1s*-0.3) infinite;
    }

    & > div:nth-child(3){
        animation: ${jump} 1s ease-in-out calc(1s*-0.15) infinite;
    }

    & > div:nth-child(4){
        animation: ${jump} 1s ease-in-out infinite;
    }
`

export const LoadingWaveDot = styled.div`
    flex-shrink: 0;
    width: calc(3rem * 0.2);
    height: calc(3rem * 0.2);
    border-radius: 50%;
    background-color: #fff;
    will-change: transform;
`

