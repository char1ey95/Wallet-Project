import styled from 'styled-components'

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

export const AssetsAmounts = (props: any) => {
	return (
		<AssetsAmountsWrapper>
			<AssetsAmount>{props.account.accounts[0].balance} ETH</AssetsAmount>
		</AssetsAmountsWrapper>
	)
}
