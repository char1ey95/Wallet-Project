import { Step1_ContentsInput, StepContentWrap, StepContentSubject, Step1_Contents, StepFormFooter } from "./styled"
import { EllipseBtn } from "../../common/button"

export const Step1 = () => {

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
                <EllipseBtn>Submit</EllipseBtn>
            </StepFormFooter>
        </>
    )
}