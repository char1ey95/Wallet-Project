import { Step1_ContentsInput, StepContentWrap, StepContentSubject, Step1_Contents, StepFormFooter } from "./styled"
import { EllipseBtn } from "../../common/button"
import React from "react"
import { useNavigate } from "react-router-dom"

export const Step1 = () => {
    const navigate = useNavigate()

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/login')
    }

    const renderInput = () => {
        const Inputs = []
        for (let i = 0; i < 12; i++) {
            Inputs.push(<Step1_ContentsInput key={i} />)
        }
        return Inputs
    }

    return (
        <>
            <StepContentWrap>
                <StepContentSubject>단어를 순서대로 입력해주세요</StepContentSubject>
                <Step1_Contents>
                    {renderInput()}
                </Step1_Contents>
            </StepContentWrap>
            <StepFormFooter>
                <EllipseBtn onClick={handleClick}>Submit</EllipseBtn>
            </StepFormFooter>
        </>
    )
}