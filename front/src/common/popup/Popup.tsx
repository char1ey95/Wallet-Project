import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";

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
    max-height: 15rem;
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
    const accounts = [
        "abdsad...asdd",
        "1e5e4r...ae1f",
        "2e00x0...asdd",
    ]
	return (
		<PopupWrap>
			<PopupHeader>
                <PopupHeaderName>Accounts</PopupHeaderName>
            </PopupHeader>
            <PopupContents>
                {accounts.map((account: string, index) => {
                    return(
                        <PopupContentWrap>
                            <QRCodeSVG value={account} width="24" height="24"></QRCodeSVG>
                            <PopupContent>{account}</PopupContent>
                        </PopupContentWrap>
                    )
                })}
            </PopupContents>
		</PopupWrap>
	);
};
