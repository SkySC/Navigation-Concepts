import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

* {
	margin: 0;
	padding: 0;
	font-family: 'Roboto Mono', sans-serif;
}

    body {
        width: 100vw;
        height: 100vh;
		background: linear-gradient(to right, #f0c27b, #4b1248);
    }
`

export const ContentWrapper = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;

	border: 0.5rem solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(to right, #f0c27b, #4b1248);
	height: 43rem;
	width: 60rem;
	overflow: hidden;
`
