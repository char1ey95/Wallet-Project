import { Step1, Step2, Step3, Step4 } from "../index"
import styled from "styled-components"
import { Icon } from "@iconify/react"
import { useNavigate } from "react-router-dom"
import { MouseEvent } from "react"

export const StepFormWrap = styled.div`
    width: 100%;
    height: 100%;
`

export const StepFormHeader = styled.header`
    display: flex;
    width: 100%;
    height: 10%;
`

export const StepFormHeaderArrow = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 100%;
    color: ${props => props.theme.main.color};

    &:hover {
        color: ${props => props.theme.main.hover};
    }
`

export const StepFormHeaderStepWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    & > div {
        margin-left: 0.4rem;
    }
`

export const StepFormHeaderStep = styled.div`
    width: 3rem;
    height: 0.4rem;
    border-radius: 1rem;
    background-color: #ffffff;
`

export const StepFormHeaderUnStep = styled.div`
    width: 3rem;
    height: 0.4rem;
    border-radius: 1rem;
    background-color: ${props => props.theme.grey};
`

export const StepFormContentWrap = styled.div`
    width: 100%;
    height: 65%;
`

interface Step_Num {
    step: number
    previous: string
}

export const StepForm = ({ step, previous }: Step_Num) => {
    const navigate = useNavigate()

    const renderStep = () => {
        const steps = []
        for (let i = 0; i < step; i++) {
            steps.push(<StepFormHeaderStep key={i} />)
        }
        for (let i = 0; i < 4 - step; i++) {
            steps.push(<StepFormHeaderUnStep key={i} />)
        }
        return steps
    };

    const renderStepComponent = (step: number) => {
        const steps = []
        if(step === 1) steps.push(<Step1 />)
        if(step === 2) steps.push(<Step2 />)
        if(step === 3) steps.push(<Step3 />)
        if(step === 4) steps.push(<Step4 />)
        return steps
    }

    const handleClickArrow = (e: MouseEvent) => {
        navigate(`/${previous}`)
    }

    return (
        <StepFormWrap>
            <StepFormHeader>
                <StepFormHeaderArrow onClick={handleClickArrow}>
                    <Icon icon={"ic:round-arrow-back"} width={"70%"}></Icon>
                </StepFormHeaderArrow>
                <StepFormHeaderStepWrap>
                    {renderStep()}
                    {/* {renderUnStep()} */}
                </StepFormHeaderStepWrap>
            </StepFormHeader>
            <StepFormContentWrap>
                {renderStepComponent(step)}
            </StepFormContentWrap>
        </StepFormWrap>
    )
}