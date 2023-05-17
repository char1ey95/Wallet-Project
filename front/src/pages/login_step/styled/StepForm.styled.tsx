import { Icon } from "@iconify/react"
import styled, { StyledComponent } from "styled-components"
import { JsxElement } from "typescript"
import { EllipseBtn } from "../../../common/button"
import { Step_1_Content, Step_2_Content, Step_3_Content, Step_4_Content } from "."

const StepFormWrap = styled.form`
    width: 100%;
    height: 100%;
`

const StepFormHeader = styled.header`
    display: flex;
    width: 100%;
    height: 10%;
`

const StepFormHeaderArrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
`

const StepFormHeaderStepWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    & > div {
        margin-left: 0.4rem;
    }
`

const StepFormHeaderStep = styled.div`
    width: 3rem;
    height: 0.4rem;
    border-radius: 1rem;
    background-color: white;
`

const StepFormHeaderUnStep = styled.div`
    width: 3rem;
    height: 0.4rem;
    border-radius: 1rem;
    background-color: #5d5d5d;
`

const StepFormContentWrap = styled.div`
    width: 100%;
    height: 65%;
`

const StepFormFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 25%;
`

interface Step_Num {
    step: number
    btn_content: string
}

export const StepForm = ({ step, btn_content }: Step_Num) => {


    // 두 함수 리팩터링으로 합치기

    const renderStep = () => {
        const steps = []
        for (let i = 0; i < step; i++) {
            steps.push(<StepFormHeaderStep key={i} />)
        }
        return steps
    };

    const renderUnStep = () => {
        const steps = []
        for (let i = 0; i < 4 - step; i++) {
            steps.push(<StepFormHeaderUnStep key={i} />)
        }
        return steps
    }

    const renderStepComponent = (step: number) => {
        const steps = []
        if(step = 1) steps.push(<Step_1_Content></Step_1_Content>)
        if(step = 2) steps.push(<Step_2_Content></Step_2_Content>)
        if(step = 3) steps.push(<Step_3_Content></Step_3_Content>)
        if(step = 4) steps.push(<Step_4_Content></Step_4_Content>)
        return steps
    }

    return (
        <StepFormWrap>
            <StepFormHeader>
                <StepFormHeaderArrow>
                    <Icon icon={"ic:round-arrow-back"} width={"70%"}></Icon>
                </StepFormHeaderArrow>
                <StepFormHeaderStepWrap>
                    {renderStep()}
                    {renderUnStep()}
                </StepFormHeaderStepWrap>
            </StepFormHeader>
            <StepFormContentWrap>
                {renderStepComponent(step)}
            </StepFormContentWrap>
            <StepFormFooter>
                <EllipseBtn>{btn_content}</EllipseBtn>
            </StepFormFooter>
        </StepFormWrap>
    )
}