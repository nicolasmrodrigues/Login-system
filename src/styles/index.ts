import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
	}

	body {
		background-color: #4070f4;
		margin-top: 100px;
	}
`

export const FieldContainer = styled.div`
  position: relative;
`

export default GlobalStyle
