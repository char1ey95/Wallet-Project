import styled from "styled-components"
import { Step_ContentWrap, Step_ContentSubject, Step_Contents, StepFormFooter } from "./Step_content.styled"
import { MouseEvent, useState } from "react"
import { EllipseBtn } from "../../../common/button"
import { useNavigate } from "react-router-dom"

const Step_3_SelectMnemonicWrap = styled.div`
    display: grid;
    grid-template-rows: repeat(4);
    grid-template-columns: repeat(3, 6rem);
    justify-content: center;
    align-content: space-evenly;
    grid-row-gap: 1rem;
    grid-column-gap: 2rem;
    width: 100%;
    height: 100%;

    & > div {
        transition: all 0.2s;
    }

    & > .select {
        background-color: #fff;
        color: #000;
    }
`

const Step_3_SelectMnemonic = styled.div`
    height: 2.5rem;
    text-align: center;
    line-height: 2.5rem;
    font-weight: 700;
    border-radius: 1rem;
    background-color: #9d9d9d;
`

export const Step_3_Content = () => {
    const navigate = useNavigate()
    const [selectValue, setSeletValue] = useState('')

    const ex_mnemonic = ['비극', '상금', '집안', '금연', '도저히', '저곳', '기획', '기원', '작품', '계약', '찌꺼기', '중국']

    const handleClick = (e: MouseEvent) => {
        const div = e.target as HTMLElement
        setSeletValue(div.innerHTML)
        div.classList.toggle('select')
    }

    const renderMnemonic = (mnemonic: string[]) => {
        const divs = []
        for (let i = 0; i < 12; i++) {
            divs.push(<Step_3_SelectMnemonic key={i} onClick={handleClick}>{mnemonic[i]}</Step_3_SelectMnemonic>)
        }
        return divs
    }

    const handleClickStep2 = (e: MouseEvent) => {
        (selectValue === ex_mnemonic[ex_mnemonic.length - 1]) ? navigate('/step4') : alert('다시 선택해주세요')
    }

    return (
        <>
            <Step_ContentWrap>
                <Step_ContentSubject>마지막 단어를 선택해주세요</Step_ContentSubject>
                <Step_Contents>
                    <Step_3_SelectMnemonicWrap>
                        {renderMnemonic(ex_mnemonic)}
                    </Step_3_SelectMnemonicWrap>
                </Step_Contents>
            </Step_ContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClickStep2}>Submit</EllipseBtn>
            </StepFormFooter>
        </>
    )
}