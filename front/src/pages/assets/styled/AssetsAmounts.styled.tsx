import { useSelector } from "react-redux"
import styled from 'styled-components'
import { RootState } from "../../../store/rootState"

const AssetsAmountsWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 25%;
`

const AssetsAmount = styled.h1`
	color: #fff;
`

export const AssetsAmounts = () => {
	const {selectedAccount} = useSelector((state: RootState) => state.accounts)
	return (
		<AssetsAmountsWrapper>
			<AssetsAmount>{selectedAccount.balance} ETH</AssetsAmount>
		</AssetsAmountsWrapper>
	)
}
