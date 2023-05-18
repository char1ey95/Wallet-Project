import styled from "styled-components"
import { Step_ContentWrap, Step_ContentSubject, Step_Contents, StepFormFooter } from "./Step_content.styled"
import { EllipseBtn } from "../../../common/button"
import { useNavigate } from "react-router-dom"
import { MouseEvent, useEffect } from "react"
import request from "../../../utils/request"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/rootState"
import { getMnemonics } from "../../../store/account"

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
    const { mnemonic } = useSelector((state: RootState) => state.accounts)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const [mnemonic, setMnemonic] = useState({ isLoading: true, error: null, data: {} })
    // const [mnemonic, setMnemonic] = useState([])

    const getMnemonic = async () => {
        try {
            const { data } = await request.get('/mnemonic')
            dispatch(getMnemonics(data.mnemonic as string[]))
            // setMnemonic(data.mnemonic)
            // setMnemonic({ isLoading: false, error: null, data })
        } catch (e) {
            // if(e instanceof Error)
            // setMnemonic({ isLoading: false, e: e.message, data: null })
        }
    }

    const renderMnemonic = (mnemonic: string[]) => {
        const divs = []
        for (let i = 0; i < 12; i++) {
            divs.push(<Step_2_Mnemonic key={i}>{i + 1}. {mnemonic[i]}</Step_2_Mnemonic>)
        }
        return divs
    }

    const handleClickStep2 = (e: MouseEvent) => {
        navigate('/step3')
    }

    useEffect(() => {
        if (mnemonic.length !== 12) getMnemonic()
    }, [])

    return (
        <>
            <Step_ContentWrap>
                <Step_ContentSubject>단어를 저장해주세요</Step_ContentSubject>
                <Step_Contents>
                    <Step_2_MnemonicWrap>
                        {renderMnemonic(mnemonic)}
                    </Step_2_MnemonicWrap>
                </Step_Contents>
            </Step_ContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClickStep2}>Continue</EllipseBtn>
            </StepFormFooter>
        </>
    )
}