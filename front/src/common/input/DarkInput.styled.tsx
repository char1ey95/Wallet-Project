import styled from 'styled-components'

export const DarkInput = styled.input`
	padding: 0.5rem 1rem;
	width: 90%;
	height: 4rem;
	font-size: 1rem;
	color: #ececec;
	background-color: #333;
	border: 1px solid #ececec;
	border-radius: 0.5rem;
	box-sizing: border-box;
	
	&:focus{
		border: 1px solid #446df5;
	}
`