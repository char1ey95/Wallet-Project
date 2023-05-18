import { Step_2_Mnemonic, Step_ContentWrap, Step_ContentSubject, Step_Contents, Step_2_MnemonicWrap, StepFormFooter } from "./styled"
import { MouseEvent, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { EllipseBtn } from "../../common/button"
import { getMnemonics } from "../../store/account"
import { RootState } from "../../store/rootState"
import request from "../../utils/request"

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