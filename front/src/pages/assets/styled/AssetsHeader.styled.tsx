import { Icon } from "@iconify/react";
import styled from "styled-components";
import { RootState } from "../../../store/rootState";
import { useSelector } from "react-redux";
import React, { MouseEvent } from "react";
import { QRCodeSVG } from "qrcode.react";

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
	newAccount: () => Promise<void>
}

export const AssetsHeader: React.FC<AssetHeaderProps> = ({ open, setOpen, newAccount }) => {
	const { accounts, selectedAccount } = useSelector((state: RootState) => state.accounts);

	const handleClickOpen = (e: MouseEvent) => {
		setOpen(!open)
	}

	const handleClickNewAccount = (e: MouseEvent) => {
		newAccount()
	}

	return (
		<AssetsHeaderWrap>
			<AssetsHeaderContents>
				<AssetsHeaderAccountsList onClick={handleClickOpen}>
					<QRCodeSVG value={selectedAccount.account} width="24" height="24"></QRCodeSVG>
					<AssetsHeaderAccountsName>
						{selectedAccount.account.substring(0,6) + '...' + selectedAccount.account.substring(36,40)}
					</AssetsHeaderAccountsName>
				</AssetsHeaderAccountsList>
				<AssetsHeaderAccountBtnWarp>
					<AssetsHeaderAccountCopyBtn>
						<Icon icon={"material-symbols:content-copy"}></Icon>
					</AssetsHeaderAccountCopyBtn>
					<AssetsHeaderAccountAddBtn onClick={handleClickNewAccount}>
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
