import styled from 'styled-components'

const Field = styled.input`
	border-radius: 6px;
	border: 2px solid #cacaca;
	padding: 8px; 16px;
	outline: none;
	width: 100%;
	font-size: 16px;
	font-weight: 400;
	margin-top: 16px;

	&:focus {
		box-shadow: 0 1px 0 0 #cacaca;
	}
`

export default Field
