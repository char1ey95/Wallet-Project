import { Circle, LoadingCircleSvg, LoadingWrap } from "./styled"

export const LoadingCircle = () => {
    return(
        <LoadingWrap>
            <LoadingCircleSvg viewBox="25 25 50 50" strokeWidth={7}>
                <Circle cx={50} cy={50} r={20}/>
            </LoadingCircleSvg>
        </LoadingWrap>
    )
}