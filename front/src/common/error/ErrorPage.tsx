import { Error404Wrap, ErrorNumber, ErrorContent } from "./styled"

type ErrorCode = number

interface ErrorProps {
    code: ErrorCode
}

export const ErrorPage = ({ code }: ErrorProps) => {
    return (
        <Error404Wrap>
            <ErrorNumber data-h1={code}></ErrorNumber>
            <ErrorContent>Page Not Found</ErrorContent>
        </Error404Wrap>
    )
}