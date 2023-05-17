import styled from "styled-components"

export const EllipseBtn = styled.button`
    cursor: pointer;
    width: 90%;
    height: 3.5rem;
    font-weight: 700;
    font-size: 1rem;
    background-color: ${props => props.color || props.theme.yellow.color};
    border: none;
	border-radius: 2rem;
    transition: all 0.2s;

    &:hover {
        /* color: ${props => props.theme.black.color}; */
        background-color: ${props => props.theme.yellow.hover};
    }
`
