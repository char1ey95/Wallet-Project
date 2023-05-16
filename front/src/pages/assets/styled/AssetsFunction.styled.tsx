import styled from 'styled-components'
import { EllipseBtn } from '../../../common/button'
import { DarkInput } from '../../../common/input'

const AssetsFunctionsWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;

    & > input {
        margin-bottom: 1.5rem;
    }

    & > button {
        margin-top: 2rem;
    }
`

export const AssetsFunctions = () => {
    return(
        <AssetsFunctionsWrapper>
            <DarkInput placeholder='송금할 계좌를 입력해주세요'/>
            <EllipseBtn>송금하기</EllipseBtn> 
            <EllipseBtn>채굴하기</EllipseBtn>
        </AssetsFunctionsWrapper>
    )
}