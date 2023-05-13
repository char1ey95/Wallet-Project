import styled from 'styled-components'

export const CircleBtn = styled.button`
    cursor: pointer;
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #FFD700;
    font-size: 2rem;
    border: none;

    &:hover, &:hover .iconify{
        background-color: #FFAF00;
    }

    & .iconify {
        position: relative;
        background-color: #FFD700;
        top: 0.25rem;
    }
`