import { HomeButtonWrap,  HomeLogoImg, HomeLogoWrap, HomeSubject } from "./styled"
import { useNavigate } from "react-router-dom"
import { MouseEvent } from "react"
import { EllipseBtn } from "../../common/button"


export const Home = () => {
    const navigate = useNavigate()
    
    const handleClickCreate = (e: MouseEvent) => {
        navigate('/step2')
    }

    const handleClickAlready = (e: MouseEvent) => {
        navigate('/step1')
    }

    return (
        <>
            <HomeLogoWrap>
                <HomeLogoImg src="wallet.png" />
                <HomeSubject>Charlies Wallet</HomeSubject>
            </HomeLogoWrap>
            <HomeButtonWrap>
                <EllipseBtn onClick={handleClickCreate}>Create new wallet</EllipseBtn>
                <EllipseBtn onClick={handleClickAlready}>I already have a wallet</EllipseBtn>
            </HomeButtonWrap>
        </>
    )
}