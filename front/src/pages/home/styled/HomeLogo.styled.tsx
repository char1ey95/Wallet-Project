import styled from "styled-components"

const HomeLogoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    width: 100%;
    height: 60%;
`

const HomeLogoImg = styled.img`
    height: 60%;
`

const HomeSubject = styled.h1`
    margin-top: 1rem;
`

export const HomeLogo = () => {
    return(
        <HomeLogoWrap>
            <HomeLogoImg src="wallet.png"/>
            <HomeSubject>Charlies Wallet</HomeSubject>
        </HomeLogoWrap>
    )
}