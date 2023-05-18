import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

const stretch = keyframes`
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dashoffset: -124px;
    }
`

export const LoadingCircleWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const LoadingCircleSvg = styled.svg`
    width: 4rem;
    height: 4rem;
    vertical-align: middle;
    transform-origin: center;
    animation: ${rotate} 2s linear infinite;

    & circle {
        fill: none;
        stroke: #fff;
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        stroke-linecap: round;
        animation: ${stretch} calc(2s * 0.75) ease-in-out infinite;
    }
`

export const Circle = styled.circle``





