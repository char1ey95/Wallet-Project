import styled from 'styled-components'

export const CircleBtn = styled.button`
    cursor: pointer;
    position: relative;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: ${props => props.theme.main.color};
    font-size: 2rem;
    color: #000;
    border: none;

    &:hover, &:hover .iconify{
        background-color: ${props => props.theme.main.hover};
    }

    & .iconify {
        position: relative;
        background-color: ${props => props.theme.main.color};
        top: 0.25rem;
    }
`