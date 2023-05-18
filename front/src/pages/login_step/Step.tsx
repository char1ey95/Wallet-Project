import { StepForm } from "./styled"

interface StepProps {
    step: number
    previous: string
}

export const Step = ({step, previous}: StepProps) => {
    return(
        <>
            <StepForm step={step} previous={previous} />
        </>
    )
}