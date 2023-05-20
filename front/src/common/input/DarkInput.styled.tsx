import styled from 'styled-components'

export const DarkInput = styled.input`
	padding: 0.5rem 1rem;
	width: ${props => props.width || "90%"};
	height: ${props => props.height || "4rem"};
	font-size: ${props => props.size || "1rem"};
	color: #ececec;
	background-color: #333;
	border: 1px solid #ececec;
	border-radius: 0.5rem;
	box-sizing: border-box;
	
	&:focus{
		border: 1px solid #446df5;
	}
`