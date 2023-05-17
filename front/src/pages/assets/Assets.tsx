import { AssetsHeader, AssetsAmounts, AssetsFunctions } from "./styled"
import { Popup } from "../../common/popup"
import { useEffect, useState } from "react"
import request from "../../utils/request"
import { useDispatch, useSelector } from "react-redux"
import { createAccount, getAccounts } from "../../store/account"
import { RootState } from "../../store/rootState"
import { account } from "../../store/account/account.interface"

export const Assets = () => {
	const [open, setOpen] = useState(false)
	const { accounts } = useSelector((state: RootState) => state.accounts);
	const dispatch = useDispatch()

	const newAccount = async () => {
		try {
			const { data } = await request.get('/wallet')
			dispatch(createAccount(data))
		} catch (e) {
			// dispatch()
		}
	}

	const searchAccount = async () => {
		try {
			const { data } = await request.get('/allWallet')
			dispatch(getAccounts(data.accountsList))
		} catch (e) {
			
		}
	}

	useEffect(() => {
		// searchAccount()
		if( accounts.length === 1) newAccount()
	}, [])

	return (
		<>
			{open ? <Popup setOpen={setOpen}/> : <></>}
			<AssetsHeader setOpen={setOpen} open={open} newAccount={newAccount}/>
			<AssetsAmounts/>
			<AssetsFunctions />
		</>
	)
}