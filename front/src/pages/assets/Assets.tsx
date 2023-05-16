import { AssetsHeader, AssetsAmounts, AssetsFunctions } from "./styled"
import { Popup } from "../../common/popup"
import { useEffect, useState } from "react"
import request from "../../utils/request"
import { useDispatch, useSelector } from "react-redux"
import { createAccount } from "../../store/account"
import { RootState } from "../../store/rootState"

export const Assets = () => {
	const [open, setOpen] = useState(false)
	const { accounts } = useSelector((state: RootState) => state.accounts);
	const dispatch = useDispatch()

	const newAccount = async () => {
		const { data } = await request.get('/wallet')
		dispatch(createAccount(data))
	}

	useEffect(() => {
		if( accounts[0].account === '' ) newAccount()
	}, [])

	return (
		<>
			{open ? <Popup /> : <></>}
			<AssetsHeader setOpen={setOpen} open={open} />
			<AssetsAmounts/>
			<AssetsFunctions />
		</>
	)
}