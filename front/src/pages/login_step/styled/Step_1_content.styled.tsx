import styled from "styled-components"

const Step_1_ContentWrap = styled.div`
    width: 100%;
    height: 100%;
`

const Step_1_ContentSubject = styled.h3`
    width: 100%;
    height: 15%;
    text-align: center;
    line-height: 2rem;
`

const Step_1_Contents = styled.div`
    display: grid;
    grid-template-rows: repeat(6);
    grid-template-columns: repeat(2, 7rem);
    justify-content: center;
    align-content: space-evenly;
    grid-row-gap: 1rem;
    grid-column-gap: 3rem;
    width: 100%;
    height: 85%;
`

const Step_1_ContentsInput = styled.input`
	padding: 0.5rem 1rem;
	height: 2.5rem;
	font-size: 1rem;
    font-weight: 700;
	color: #2c2c2c;
	background-color: #d5d5d5;
	border: none;
    border-radius: 3rem;
	box-sizing: border-box;
	
	&:focus{
		border: 1px solid #446df5;
	}
`

export const Step_1_Content = () => {

    const renderInput = () => {
        const Inputs = []
        for (let i = 0; i < 12; i++) {
            Inputs.push(<Step_1_ContentsInput key={i} />)
        }
        return Inputs
    }

    return (
        <Step_1_ContentWrap>
            <Step_1_ContentSubject>단어를 순서대로 입력해주세요</Step_1_ContentSubject>
            <Step_1_Contents>
                {renderInput()}
            </Step_1_Contents>
        </Step_1_ContentWrap>
    )
}