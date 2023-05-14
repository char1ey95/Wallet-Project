import { Icon } from '@iconify/react'
import styled from 'styled-components'

const AssetsHeaderWrap = styled.header`
    width: 100%;
    height: 3rem;
`

const AssetsHeaderAccountsList = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    width: 50%;
    height: 100%;
    & > img, div {
        margin-left: 0.5rem;
    }
`

const AssetsHeaderAccountsIcon = styled.img`
    height: 100%;
    border-radius: 50%;
    background-color: #fff;
`

const AssetsHeaderAccountsName = styled.div`
    font-family: "Gmarket";
`

const AssetsHeaderAccountBtnWarp = styled.div`
    display: flex;
    justify-content: right;
    width: 40%;
    height: 100%;
    & > button {
        cursor: pointer;
        margin-right: 0.5rem;
    }
`

const AssetsHeaderAccountCopyBtn = styled.button`
    width: 2rem;
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
`

const AssetsHeaderAccountAddBtn = styled.button`
    width: 2rem;
    font-size: 1.5rem;
    background-color: transparent;
    border: none;
`

const AssetsHeaderContents = styled.div`
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-evenly;
    width:100%;
    height: 100%;
    box-sizing: border-box;
`

export const AssetsHeader = () => {
    return(
        <AssetsHeaderWrap>
            <AssetsHeaderContents>
                <AssetsHeaderAccountsList>
                    <AssetsHeaderAccountsIcon src='default.png'/>
                    <AssetsHeaderAccountsName>
                        AccountsName
                        {/* AccountsName */}
                    </AssetsHeaderAccountsName>
                </AssetsHeaderAccountsList>
                <AssetsHeaderAccountBtnWarp>
                <AssetsHeaderAccountCopyBtn>
                        <Icon icon={'material-symbols:content-copy'}></Icon>
                    </AssetsHeaderAccountCopyBtn>
                    <AssetsHeaderAccountAddBtn>
                        <Icon icon={'material-symbols:add-card-outline'}></Icon>
                    </AssetsHeaderAccountAddBtn>
                </AssetsHeaderAccountBtnWarp>
            </AssetsHeaderContents>
        </AssetsHeaderWrap>
    )
}