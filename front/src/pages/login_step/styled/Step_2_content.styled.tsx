import styled from "styled-components"
import { Step_ContentWrap, Step_ContentSubject, Step_Contents, StepFormFooter } from "./Step_content.styled"
import { EllipseBtn } from "../../../common/button"
import { useNavigate } from "react-router-dom"
import { MouseEvent } from "react"

const Step_2_MnemonicWrap = styled.div`
    width: 80%;
    height: 60%;
    border: 1px solid #9d9d9d;
    border-radius: 1rem;
    background-color: #5d5d5d;
`

const Step_2_Mnemonic = styled.div`
    display: inline-block;
    width: 33%;
    height: 25%;
    font-weight: 700;
    text-align: center;
    line-height: 3rem;
`


export const Step_2_Content = () => {
    const navigate = useNavigate()
    
    const ex_mnemonic = ['비극', '상금', '집안', '금연', '도저히', '저곳', '기획', '기원', '작품', '계약', '찌꺼기', '중국']
    
    const renderMnemonic = (mnemonic: string[]) => {
        const divs = []
        for (let i = 0; i < 12; i++) {
            divs.push(<Step_2_Mnemonic key={i}>{i+1}. {mnemonic[i]}</Step_2_Mnemonic>)
        }
        return divs
    }

    const handleClickStep2 = (e: MouseEvent) => {
        navigate('/step3')
    }

    return (
        <>
            <Step_ContentWrap>
                <Step_ContentSubject>단어를 저장해주세요</Step_ContentSubject>
                <Step_Contents>
                    <Step_2_MnemonicWrap>
                        {renderMnemonic(ex_mnemonic)}
                    </Step_2_MnemonicWrap>
                </Step_Contents>
            </Step_ContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClickStep2}>Continue</EllipseBtn>
            </StepFormFooter>
        </>
    )
}