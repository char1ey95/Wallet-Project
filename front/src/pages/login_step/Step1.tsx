import { Step1_ContentsInput, StepContentWrap, StepContentSubject, Step1_Contents, StepFormFooter, Step1_Contents_Wrap } from "./styled"
import { EllipseBtn } from "../../common/button"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import request from "../../utils/request"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../store/rootState"
import { POST_MNEMONIC_FAILURE, POST_MNEMONIC_REQUEST, POST_MNEMONIC_SUCCESS } from "../../store/mnemonic"

export const Step1 = () => {
    const [inputValues, setInputValues] = useState(Array(12).fill(''))
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const postMnemonic = async (mnemonics: string[]) => {
        dispatch({ type: POST_MNEMONIC_REQUEST})
        try {
            const { data } = await request.post('/mnemonic', { mnemonics })
            dispatch({ type: POST_MNEMONIC_SUCCESS, payload: data })
        } catch (e) {
            if (e instanceof Error)
                dispatch({ type: POST_MNEMONIC_FAILURE, payload: e.message })
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postMnemonic(inputValues)
        navigate('/login')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = e.target.value;
        setInputValues(newInputValues);
    };

    const renderInput = () => {
        const Inputs = []
        for (let i = 0; i < 12; i++) {
            Inputs.push(<Step1_ContentsInput
                name={`word${i + 1}`}
                placeholder={`${i + 1}번째 단어`}
                value={inputValues[i]}
                onChange={(e) => handleInputChange(e, i)}
                key={i}
            />)
        }
        return Inputs
    }

    return (
        <Step1_Contents_Wrap onSubmit={handleSubmit}>
            <StepContentWrap>
                <StepContentSubject>단어를 순서대로 입력해주세요</StepContentSubject>
                <Step1_Contents>
                    {renderInput()}
                </Step1_Contents>
            </StepContentWrap>
            <StepFormFooter>
                <EllipseBtn type="submit">Submit</EllipseBtn>
            </StepFormFooter>
        </Step1_Contents_Wrap>
    )
}