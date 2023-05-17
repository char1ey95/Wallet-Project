import styled from "styled-components";
import { QRCodeSVG } from "qrcode.react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootState";
import { MouseEvent, useState } from "react";
import { selectAccount } from "../../store/account";
import { AccountState, account } from "../../store/account/account.interface";
import request from "../../utils/request";

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

interface PopupProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Popup: React.FC<PopupProps> = ({setOpen}) => {
    const { accounts, selectedAccount } = useSelector((state: RootState) => state.accounts)
    const [balance, setBalance] = useState({})
    const dispatch = useDispatch()

    const getBalance = async (account: account) => {
        try {
            const { data } = await request.get(`/balance/${account}`)
            setBalance(data)
        } catch (e) {
            
        }
    }

    const handleClickSelectAccount = (e: MouseEvent) => {
        const account = e.target as HTMLElement
        const findValue = account.innerHTML.substring(0, 6)
        const [selectOne] = accounts.filter((v) => v.account.substring(0, 6) === findValue)
        getBalance(selectOne.account)
        // dispatch(selectAccount())
        setOpen(false)
    }

    return (
        <PopupWrap>
            <PopupHeader>
                <PopupHeaderName>Accounts</PopupHeaderName>
            </PopupHeader>
            <PopupContents onClick={handleClickSelectAccount}>
                {accounts.map((account, index) => {
                    if (index === 0 && account.account.length === 0) return <input type="hidden" key={index}></input>
                    return (
                        <PopupContentWrap key={index}>
                            <QRCodeSVG value={account.account} width="24" height="24"></QRCodeSVG>
                            <PopupContent>{account.account.substring(0, 12)}...{account.account.substring(36, 40)}</PopupContent>
                        </PopupContentWrap>
                    )
                })}
            </PopupContents>
        </PopupWrap>
    );
};
