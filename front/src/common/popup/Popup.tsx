import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/rootState";

const PopupWrap = styled.div`
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

const PopupHeader = styled.header`
    display: flex;
    align-items: center;
	padding-left: 1rem;
	width: 100%;
	height: 3rem;
	border-bottom: 1px solid #ffffff51;
	box-sizing: border-box;
`;

const PopupHeaderName = styled.h1`
	color: #fff;
	font-family: "Gmarket";
	font-size: 1.25rem;
`;

const PopupContents = styled.div`
    width: 100%;
    min-height: 3rem;
    max-height: 9rem;
    overflow: auto;
`
const PopupContentWrap = styled.div`
    display: flex;
    align-items: center;
    padding-left: 1rem;
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
`

const PopupContent = styled.div`
    margin: 0.5rem 1rem;
    font-size: 1.5rem;
`

export const Popup = () => {
    const { accounts } = useSelector((state: RootState) => state.accounts)
    return (
        <PopupWrap>
            <PopupHeader>
                <PopupHeaderName>Accounts</PopupHeaderName>
            </PopupHeader>
            <PopupContents>
                {accounts.map((account, index) => {
                    return (
                        <PopupContentWrap key={index}>
                            <QRCodeSVG value={account.account} width="24" height="24"></QRCodeSVG>
                            <PopupContent>{account.account}</PopupContent>
                        </PopupContentWrap>
                    )
                })}
            </PopupContents>
        </PopupWrap>
    );
};
