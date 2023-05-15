import { Icon } from '@iconify/react'
import { CircleBtn } from '../../../common/button'
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

export const AssetsAmounts = () => {
	return (
		<AssetsAmountsWrapper>
			<AssetsAmount>$10.05</AssetsAmount>
			{/* <CircleBtn>
				<Icon icon={"ic:baseline-arrow-upward"}></Icon>
			</CircleBtn>
			<CircleBtn>
				<Icon icon={"ic:baseline-arrow-downward"}></Icon>
			</CircleBtn> */}
		</AssetsAmountsWrapper>
	)
}
