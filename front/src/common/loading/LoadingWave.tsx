import { LoadingWaveDot, LoadingWaveWrap, LoadingWrap } from "./styled"

export const LoadingWave = () => {
    return(
        <LoadingWrap>
            <LoadingWaveWrap>
                <LoadingWaveDot />
                <LoadingWaveDot />
                <LoadingWaveDot />
                <LoadingWaveDot />
            </LoadingWaveWrap>
        </LoadingWrap>
    )
}