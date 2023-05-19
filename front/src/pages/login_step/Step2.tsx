import { StepContentWrap, StepContentSubject, StepContents, Step2_MnemonicWrap, StepFormFooter, Step2_Mnemonic } from "./styled"
import { MNEMONIC_FAILURE, MNEMONIC_REQUEST, MNEMONIC_SUCCESS, failureMnemonic, requestMnemonic, successMnemonic } from "../../store/mnemonic"
import { useSelector, useDispatch } from "react-redux"
import { MouseEvent, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { EllipseBtn } from "../../common/button"
import { RootState } from "../../store/rootState"
import request from "../../utils/request"
import { LoadingCircle } from "../../common/loading"
import { ErrorPage } from "../../common/error"

export const Step2 = () => {
    const { mnemonic } = useSelector((state: RootState) => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const getMnemonic = async () => {
        try {
            dispatch(requestMnemonic({ type: MNEMONIC_REQUEST }))
            const { data } = await request.get('/mnemonic')
            console.log(data)
            if (!(data as string[])) throw Error("니모닉 단어를 불러오지 못했습니다.")
            dispatch(successMnemonic({ type: MNEMONIC_SUCCESS, payload: data }))
        } catch (e) {
            if (e instanceof Error)
                dispatch(failureMnemonic({ type: MNEMONIC_FAILURE, payload: e.message }))
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
        if (mnemonic.mnemonics.length !== 12) getMnemonic()
    }, [])

    if (mnemonic.isLoading) return <LoadingCircle />
    if (mnemonic.isError) return <ErrorPage code={404} />
    return (
        <>
            <StepContentWrap>
                <StepContentSubject>단어를 저장해주세요</StepContentSubject>
                <StepContents>
                    <Step2_MnemonicWrap>
                        {renderMnemonic(mnemonic.mnemonics)}
                    </Step2_MnemonicWrap>
                </StepContents>
            </StepContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClickStep2}>Continue</EllipseBtn>
            </StepFormFooter>
        </>
    )
}