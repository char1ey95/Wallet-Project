import { MouseEvent, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { EllipseBtn } from "../../common/button"
import { getMnemonics } from "../../store/account"
import { RootState } from "../../store/rootState"
import request from "../../utils/request"
import { StepContentWrap, StepContentSubject, StepContents, Step2_MnemonicWrap, StepFormFooter, Step2_Mnemonic } from "./styled"

export const Step2 = () => {
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
            divs.push(<Step2_Mnemonic key={i}>{i + 1}. {mnemonic[i]}</Step2_Mnemonic>)
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
            <StepContentWrap>
                <StepContentSubject>단어를 저장해주세요</StepContentSubject>
                <StepContents>
                    <Step2_MnemonicWrap>
                        {renderMnemonic(mnemonic)}
                    </Step2_MnemonicWrap>
                </StepContents>
            </StepContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClickStep2}>Continue</EllipseBtn>
            </StepFormFooter>
        </>
    )
}