import { Step_1_ContentsInput, Step_ContentWrap, Step_ContentSubject, Step_1_Contents, StepFormFooter } from "./styled"
import { EllipseBtn } from "../../common/button"

export const Step1 = () => {

    const renderInput = () => {
        const Inputs = []
        for (let i = 0; i < 12; i++) {
            Inputs.push(<Step_1_ContentsInput key={i} />)
        }
        return Inputs
    }

    return (
        <>
            <Step_ContentWrap>
                <Step_ContentSubject>단어를 순서대로 입력해주세요</Step_ContentSubject>
                <Step_1_Contents>
                    {renderInput()}
                </Step_1_Contents>
            </Step_ContentWrap>
            <StepFormFooter>
                <EllipseBtn>Submit</EllipseBtn>
            </StepFormFooter>
        </>
    )
}