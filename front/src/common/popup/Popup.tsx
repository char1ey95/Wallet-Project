import { PopupWrap, PopupHeader, PopupHeaderName, PopupContents, PopupContentWrap, PopupContent } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { QRCodeSVG } from "qrcode.react";
import { RootState } from "../../store/rootState";
import request from "../../utils/request";
import { account } from "../../store/interface";
import { SELECT_ACCOUNT_FAILURE, SELECT_ACCOUNT_REQUEST, SELECT_ACCOUNT_SUCCESS } from "../../store/account";
import { LoadingCircle } from "../loading";
import { ErrorPage } from "../error";

interface PopupProps {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const Popup: React.FC<PopupProps> = ({setOpen}) => {
    const { wallet, account } = useSelector((state: RootState) => state)
    const dispatch = useDispatch()

    const getSelectedAccountBalance = async (account: account) => {
            dispatch({type: SELECT_ACCOUNT_REQUEST})
        try {
            const { data } = await request.get(`/balance/${account}`)
            dispatch({type: SELECT_ACCOUNT_SUCCESS, payload: data})
        } catch (e) {
            if( e instanceof Error)
            dispatch({ type: SELECT_ACCOUNT_FAILURE, payload: e.message})
        }
    }

    const handleClickSelect= (e: React.MouseEvent<HTMLDivElement>) => {
        const selectAccount = (e.target as HTMLDivElement).dataset.account
        if( selectAccount === undefined ) return alert("사용할 수 없는 계정입니다.")
        getSelectedAccountBalance(selectAccount)
        setOpen(false)
    }

    if( account.isLoading ) return <LoadingCircle />
    if( account.isError ) return <ErrorPage code={404} />
    return (
        <PopupWrap>
            <PopupHeader>
                <PopupHeaderName>Accounts</PopupHeaderName>
            </PopupHeader>
            <PopupContents onClick={handleClickSelect}>
                {wallet.wallet.map((account, index) => {
                    return (
                        <PopupContentWrap key={index}>
                            <QRCodeSVG value={account.account} width="24" height="24"></QRCodeSVG>
                            <PopupContent data-account={account.account}>{account.account.substring(0, 12)}...{account.account.substring(36, 40)}</PopupContent>
                        </PopupContentWrap>
                    )
                })}
            </PopupContents>
        </PopupWrap>
    );
};
