import { Icon } from '@iconify/react'
import { CircleBtn } from '../../common/button'

const Assets = () => {
    return(
        <>
            <CircleBtn>
				<Icon icon={"ic:baseline-arrow-upward"}></Icon>
			</CircleBtn>
			<CircleBtn>
				<Icon icon={"ic:baseline-arrow-downward"}></Icon>
			</CircleBtn>
        </>
    )
}