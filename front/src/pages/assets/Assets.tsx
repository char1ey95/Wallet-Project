import { AssetsAmount, AssetsAmountsWrapper, AssetsFunctionsWrapper, AssetsHeaderAccountAddBtn, AssetsHeaderAccountBtnWarp, AssetsHeaderAccountCancelBtn, AssetsHeaderAccountCopyBtn, AssetsHeaderAccountsList, AssetsHeaderAccountsName, AssetsHeaderContents, AssetsHeaderWrap } from "./styled"
import { CREATE_ACCOUNT_FAILURE, CREATE_ACCOUNT_REQUEST, CREATE_ACCOUNT_SUCCESS } from "../../store/wallet"
import { ACCOUNT_SUCCESS } from "../../store/account"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { MouseEvent, useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import { Icon } from "@iconify/react"
import { Popup } from "../../common/popup"
import request from "../../utils/request"
import { RootState } from "../../store/rootState"
import { EllipseBtn } from "../../common/button"
import { DarkInput } from "../../common/input"

export const Assets = () => {
	const { wallet, mnemonic, account } = useSelector((state: RootState) => state)
	const [open, setOpen] = useState(false)
	const [copy, setCopy] = useState(account.accountInfo.account)
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

	const mineBlock = async () => {
		try {
			const { data } = await request.post('/mineBlock', { account: account.accountInfo.account })
			console.log(data)
			alert('블럭이 생성되었습니다!')
		} catch (e) {
			alert('블럭을 생성하지 못하였습니다!')
		}
	}

	const handleClickMine = (e: MouseEvent) => {
		mineBlock()
	}

	const handleClickCancel = (e: MouseEvent) => {
		navigate('/')
	}

	const handleClickOpen = (e: MouseEvent) => {
		setOpen(!open)
	}

	const handleClickNewAccount = (e: MouseEvent) => {
		createNewAccount()
	}

	const handleClickCopy = (e: MouseEvent) => {
		setCopy(account.accountInfo.account)
		alert(`${copy}가 복사되었습니다.`)
	}

	return (
		<>
			{open ? <Popup setOpen={setOpen} /> : <></>}
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
				<DarkInput placeholder='송금할 계좌를 입력해주세요' />
				<EllipseBtn type="submit">Send</EllipseBtn>
				<EllipseBtn type="button" onClick={handleClickMine}>Mine</EllipseBtn>
			</AssetsFunctionsWrapper>
		</>
	)
}