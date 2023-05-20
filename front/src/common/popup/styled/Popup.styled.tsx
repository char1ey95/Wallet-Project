import styled from "styled-components";

export const PopupWrap = styled.div`
	position: absolute;
	top: 3rem;
	left: 2rem;
	width: 20rem;
    min-height: 6.5rem;
	max-height: 12rem;
	border: 1px solid #fff;
	border-radius: 0.5rem;
	background-color: #191919;
	z-index: 999;
`;

export const PopupHeader = styled.header`
    display: flex;
    align-items: center;
	padding-left: 1rem;
	width: 100%;
	height: 3rem;
	border-bottom: 1px solid #ffffff51;
	box-sizing: border-box;
`;

export const PopupHeaderName = styled.h1`
	color: #fff;
	font-family: ${props => props.theme.font};
	font-size: 1.25rem;
`;

export const PopupContents = styled.div`
    width: 100%;
    min-height: 3rem;
    max-height: 9rem;
    overflow: auto;
`
export const PopupContentWrap = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
`

export const PopupContent = styled.div`
	cursor: pointer;
    margin: 0.5rem 1rem;
    font-size: 1rem;
	&:hover {
		color: ${props => props.theme.main.hover};
	}
`