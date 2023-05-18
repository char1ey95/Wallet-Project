import { Step_3_SelectMnemonic, Step_ContentWrap, Step_ContentSubject, Step_Contents, Step_3_SelectMnemonicWrap, StepFormFooter } from "./styled"
import { useState, useEffect, MouseEvent } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { EllipseBtn } from "../../common/button"
import { mnemonicWord } from "../../store/account/account.interface"
import { RootState } from "../../store/rootState"

export const Step3 = () => {
    const {mnemonic} = useSelector((state: RootState) => state.accounts)
    const [shuffledMnemonic, setShuffledMnemonic] = useState([''])
    const [selectValue, setSeletValue] = useState('')
    const navigate = useNavigate()

    const handleClick = (e: MouseEvent) => {
        const div = e.target as HTMLElement
        setSeletValue(div.innerHTML)
        div.classList.toggle('select')
    }

    const handleClickStep2 = (e: MouseEvent) => {
        (selectValue === mnemonic[mnemonic.length - 1]) ? navigate('/step4') : alert('다시 선택해주세요')
    }

    const renderMnemonic = (mnemonic: string[]) => {
        const divs = []
        for (let i = 0; i < 12; i++) {
            divs.push(<Step_3_SelectMnemonic key={i} onClick={handleClick}>{mnemonic[i]}</Step_3_SelectMnemonic>)
        }
        return divs
    }

    const shuffleWords = (mnemonic: mnemonicWord[]): mnemonicWord[] => {
        const shuffled = [...mnemonic];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    useEffect(() => {
        setShuffledMnemonic(shuffleWords(mnemonic))
    }, [])

    return (
        <>
            <Step_ContentWrap>
                <Step_ContentSubject>마지막 단어를 선택해주세요</Step_ContentSubject>
                <Step_Contents>
                    <Step_3_SelectMnemonicWrap>
                        {renderMnemonic(shuffledMnemonic)}
                    </Step_3_SelectMnemonicWrap>
                </Step_Contents>
            </Step_ContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClickStep2}>Submit</EllipseBtn>
            </StepFormFooter>
        </>
    )
}