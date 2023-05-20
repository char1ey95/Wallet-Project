import { AssetsAmount, AssetsAmountsWrapper, AssetsFunctionsWrapper, AssetsHeaderAccountAddBtn, AssetsHeaderAccountBtnWarp, AssetsHeaderAccountCancelBtn, AssetsHeaderAccountCopyBtn, AssetsHeaderAccountsList, AssetsHeaderAccountsName, AssetsHeaderContents, AssetsHeaderWrap } from "./styled"
import { CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS } from "../../store/wallet"
import { ACCOUNT_SUCCESS, SELECT_ACCOUNT_FAILURE, SELECT_ACCOUNT_REQUEST, SELECT_ACCOUNT_SUCCESS } from "../../store/account"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import React, { MouseEvent, useEffect, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Icon } from "@iconify/react"
import { Popup, SendPopup } from "../../common/popup"
import request from "../../utils/request"
import { RootState } from "../../store/rootState"
import { EllipseBtn } from "../../common/button"
import { DarkInput } from "../../common/input"
import { account } from "../../store/interface"

export const Assets = () => {
	const { wallet, mnemonic, account } = useSelector((state: RootState) => state)
	const [open, setOpen] = useState(false)
	const [copy, setCopy] = useState(account.accountInfo.account)
	const [receiver, setReceiver] = useState('')
	const [amount, setAmount] = useState('')
	// const [eth, setEth] = useState({
	// 	isLoadding: true,
	// 	isError: null,
	// 	data: account.accountInfo.balance
	// })
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const createNewAccount = async () => {
		dispatch({ type: CREATE_ACCOUNT_REQUEST })
		try {
			const { data } = await request.post('/createAccount', {
				masterkey: mnemonic.masterKey,
				index: wallet.accountsNumber + 1,
				signature: document.cookie.split("=")[1]
			})
			if (data.error) throw new Error(data.error)
			data.accountsNumber = data.accountsNumber.accountsNumber
			dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: data })
			dispatch({ type: ACCOUNT_SUCCESS, payload: data.wallet })
		} catch (e) {
			alert("계정 생성에 실패했습니다.")
			if (e instanceof Error)
				dispatch({ type: CREATE_ACCOUNT_FAILURE, payload: e.message })
		}
	}

	const mineBlock = async (account: account) => {
		try {
			const { data } = await request.post('/mineBlock', { account })
			console.log(data)
			alert('블럭이 생성되었습니다!')
		} catch (e) {
			alert('블럭을 생성하지 못하였습니다!')
		}
	}

	const getSelectedAccountBalance = async (account: account) => {
		dispatch({ type: SELECT_ACCOUNT_REQUEST })
		try {
			const { data } = await request.get(`/balance/${account}`)
			dispatch({ type: SELECT_ACCOUNT_SUCCESS, payload: data })
		} catch (e) {
			if (e instanceof Error)
				dispatch({ type: SELECT_ACCOUNT_FAILURE, payload: e.message })
		}
	}

	const handleClickSend = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log(receiver)
		if(receiver.length !== 40) return alert("계좌번호의 자릿수가 올바르지 않습니다.")
		request.post('/transaction', { sender: account.accountInfo.account, received: receiver, amount: 0 })
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setReceiver(e.target.value)
		console.log(receiver)
	}

	const handleClickMine = (e: React.MouseEvent<HTMLButtonElement>) => {
		mineBlock(account.accountInfo.account)
		getSelectedAccountBalance(account.accountInfo.account)
		navigate('/assets')
	}

	const handleClickCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
		navigate('/')
	}

	const handleClickOpen = (e: React.MouseEvent<HTMLDivElement>) => {
		setOpen(!open)
	}

	const handleClickNewAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
		createNewAccount()
	}

	const handleClickCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
		setCopy(account.accountInfo.account)
		alert(`${copy}가 복사되었습니다.`)
	}

	return (
		<>
			{open ? <Popup setOpen={setOpen} /> : <></>}
			{<SendPopup />}
			<AssetsHeaderWrap>
				<AssetsHeaderContents>
					<AssetsHeaderAccountsList onClick={handleClickOpen}>
						<QRCodeSVG value={account.accountInfo.account} width="24" height="24"></QRCodeSVG>
						<AssetsHeaderAccountsName>
							{account.accountInfo.account.substring(0, 6) + '...' + account.accountInfo.account.substring(36, 40)}
						</AssetsHeaderAccountsName>
					</AssetsHeaderAccountsList>
					<AssetsHeaderAccountBtnWarp>
						<AssetsHeaderAccountCopyBtn onClick={handleClickCopy}>
							<Icon icon={"material-symbols:content-copy"}></Icon>
						</AssetsHeaderAccountCopyBtn>
						<AssetsHeaderAccountAddBtn onClick={handleClickNewAccount}>
							<Icon icon={"material-symbols:add-card-outline"}></Icon>
						</AssetsHeaderAccountAddBtn>
						<AssetsHeaderAccountCancelBtn onClick={handleClickCancel}>
							<Icon icon={"material-symbols:cancel"}></Icon>
						</AssetsHeaderAccountCancelBtn>
					</AssetsHeaderAccountBtnWarp>
				</AssetsHeaderContents>
			</AssetsHeaderWrap>
			<AssetsAmountsWrapper>
				<AssetsAmount>{account.accountInfo.balance} ETH</AssetsAmount>
			</AssetsAmountsWrapper>
			<AssetsFunctionsWrapper>
				<DarkInput placeholder='송금할 계좌를 입력해주세요' onChange={handleChange} />
				<EllipseBtn type="submit" onClick={handleClickSend}>Send</EllipseBtn>
				<EllipseBtn type="button" onClick={handleClickMine}>Mine</EllipseBtn>
			</AssetsFunctionsWrapper>
		</>
	)
}