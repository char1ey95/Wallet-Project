import styled from "styled-components";

export const ConfirmBtn = styled.button`
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    font-size: 1.125rem;
    line-height: 2rem;
    color: ${props => props.color || "#fff" };
    box-sizing: border-box;
    border: none;
    border-radius: 0.25rem;
    border: 0.125rem solid ${props => props.color || "#fff"};
    background: ${props => props.theme.black};

    &:hover {
        color: ${props => props.theme.hoverColor || "#000"};
        background: ${props => props.theme.hover || "#fff"};
    }
`