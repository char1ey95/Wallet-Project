import { Icon } from "@iconify/react";
import styled from "styled-components";
import { RootState } from "../../../store/rootState";
import { useSelector } from "react-redux";
import React, { MouseEvent } from "react";

const AssetsHeaderWrap = styled.header`
	width: 100%;
	height: 3rem;
`;

const AssetsHeaderAccountsList = styled.div`
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

const AssetsHeaderAccountsIcon = styled.img`
	height: 100%;
	border-radius: 50%;
	background-color: #fff;
`;

const AssetsHeaderAccountsName = styled.div`
	font-family: "Gmarket";
`;

const AssetsHeaderAccountBtnWarp = styled.div`
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

const AssetsHeaderAccountCopyBtn = styled.button`
	width: 2rem;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
`;

const AssetsHeaderAccountAddBtn = styled.button`
	width: 2rem;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
`;

const AssetsHeaderAccountCancelBtn = styled.button`
	width: 2rem;
	font-size: 1.5rem;
	background-color: transparent;
	border: none;
`;

const AssetsHeaderContents = styled.div`
	padding: 0.5rem 0;
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
`;

interface AssetHeaderProps {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AssetsHeader: React.FC<AssetHeaderProps> = ({ open, setOpen }) => {
	const { accounts } = useSelector((state: RootState) => state.accounts);

	const handleClickSelected = (e: MouseEvent) => {
		setOpen(!open)
	}

	return (
		<AssetsHeaderWrap>
			<AssetsHeaderContents>
				<AssetsHeaderAccountsList onClick={handleClickSelected}>
					<AssetsHeaderAccountsIcon src="default.png" />
					<AssetsHeaderAccountsName>
						{accounts[0].account.substring(0,6) + '...' + accounts[0].account.substring(36,40)}
					</AssetsHeaderAccountsName>
				</AssetsHeaderAccountsList>
				<AssetsHeaderAccountBtnWarp>
					<AssetsHeaderAccountCopyBtn>
						<Icon icon={"material-symbols:content-copy"}></Icon>
					</AssetsHeaderAccountCopyBtn>
					<AssetsHeaderAccountAddBtn>
						<Icon icon={"material-symbols:add-card-outline"}></Icon>
					</AssetsHeaderAccountAddBtn>
					<AssetsHeaderAccountCancelBtn>
						<Icon icon={"material-symbols:cancel"}></Icon>
					</AssetsHeaderAccountCancelBtn>
				</AssetsHeaderAccountBtnWarp>
			</AssetsHeaderContents>
		</AssetsHeaderWrap>
	);
};
