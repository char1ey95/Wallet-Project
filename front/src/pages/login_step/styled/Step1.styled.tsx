import styled from "styled-components"

export const Step1_Contents = styled.div`
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

export const Step1_ContentsInput = styled.input`
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