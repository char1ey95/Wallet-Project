import styled from "styled-components"

export const EllipseBtn = styled.button`
    cursor: pointer;
    width: 90%;
    height: 4rem;
    font-weight: 700;
    font-size: 1.5rem;
    background-color: ${props => props.theme.yellow.color};
    border: none;
	border-radius: 2rem;

    &:hover{
        background-color: ${props => props.theme.yellow.hover};
    }
`
