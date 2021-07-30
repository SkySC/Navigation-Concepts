import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=PT+Sans&display=swap');

	html {
		scroll-behavior: smooth;
	}

	* {
		margin: 0;
		padding: 0;
		color: #fff;
		font-family: 'PT Sans', sans-serif;
		font-size: 1rem;
	}

	body {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
    	scrollbar-width: none; /* for Firefox */
   		overflow-y: scroll; 
	}

	body::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}

	li {
		color: #000;
	}
`

export const FormatedTitle = styled.h2`
	color: #000;
	display: flex;
	height: 20vh;
	align-items: center;
	justify-content: center;
	font-size: 2.5rem;
	font-weight: bolder;
	font-size: ${(props) => (props.sub ? '2rem' : '2.5rem')};
`

export const MainTextContainer = styled.div`
	margin: 5rem auto;
	max-width: 60rem;
	width: 60vw;
	color: #000;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	line-height: 1.8rem;
	letter-spacing: 0.1rem;
	text-align: justify;

	& > p {
		margin-bottom: 4rem;
	}

	& > ul {
		margin: 1rem 0 2rem;
		list-style-type: square;
	}
`
