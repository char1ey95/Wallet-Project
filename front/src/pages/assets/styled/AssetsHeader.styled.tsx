import styled from "styled-components";

export const AssetsHeaderWrap = styled.header`
	width: 100%;
	height: 3rem;
`;

export const AssetsHeaderAccountsList = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	width: 50%;
	height: 100%;
	& > img,
	div {
		margin-left: 0.5rem;
	}
`;

export const AssetsHeaderAccountsIcon = styled.img`
	height: 100%;
	border-radius: 50%;
	background-color: #fff;
`;

export const AssetsHeaderAccountsName = styled.div`
	font-family: ${props => props.theme.font};
`;

export const AssetsHeaderAccountBtnWarp = styled.div`
	display: flex;
	justify-content: right;
	width: 40%;
	height: 100%;

	& > button {
		cursor: pointer;
		margin-right: 0.25rem;
	}

	& > button:hover {
		color: #737373;
	}
`;

export const AssetsHeaderAccountCopyBtn = styled.button`
	width: 2rem;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
`;

export const AssetsHeaderAccountAddBtn = styled.button`
	width: 2rem;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
`;

export const AssetsHeaderAccountCancelBtn = styled.button`
	width: 2rem;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
`;

export const AssetsHeaderContents = styled.div`
	padding: 0.5rem 0;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
`;
