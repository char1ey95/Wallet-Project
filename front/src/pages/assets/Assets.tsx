import { useDispatch, useSelector } from "react-redux";
import { AssetsHeader, AssetsAmounts, AssetsFunctions } from "./styled";
import { RootState } from "../../store/rootState";
import { GET_ACCOUNT_SUCCESS } from "../../store/account";
import request from "../../utils/request";
import { Popup } from "../../common/popup";

export const Assets = () => {
	const accounts = useSelector((state: RootState) => state.accounts);
	const dispatch = useDispatch();

    const mineBlock = async () => {
        try {
            const { data } = await request.post('/mineBlock', { account: "" })
        } catch (e) {
            alert('블럭을 생성하지 못하였습니다.')
        }
    }

    const sendETH = async () => {
        try {
            const { data } = await request.post('/transaction', { sender: "", received: "", amount: 0 })
        } catch (e) {
            alert('송금에 실패하였습니다.')
        }
    }

	const createAccount = async () => {
		try {
			const { data } = await request.get("/wallet");
			dispatch({type: GET_ACCOUNT_SUCCESS, payload: data})
		} catch (e) {}
	};

	return (
		<>
			<Popup />
			<AssetsHeader />
			<AssetsAmounts account={accounts} />
			<AssetsFunctions />
		</>
	);
};
