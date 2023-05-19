import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import request from "../../utils/request";
import { WalletState } from "../interface";
import { GET_WALLET_FAILURE, GET_WALLET_REQUEST, GET_WALLET_SUCCESS } from ".";
import { RootState } from "../rootState";
import { useDispatch } from "react-redux";

// export const requestWallet = () => async () => {
//     dispatch({ type: GET_WALLET_REQUEST });

//     try {
//         const { data } = await request.get('/')
//         console.log(data)
//         dispatch({ type: GET_WALLET_SUCCESS, payload: data });
//     } catch (error) {
//         dispatch({ type: GET_WALLET_FAILURE, error: '계정의 지갑 정보를 불러오는데 실패했습니다.' });
//     }
// };