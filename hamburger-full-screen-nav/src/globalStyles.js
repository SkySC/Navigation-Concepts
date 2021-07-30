import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	html {
		scroll-behavior: smooth;
	}

	* {
		margin: 0;
		padding: 0;
		font-family: 'PT Sans', sans-serif;
	}

	body {
		-ms-overflow-style: none; /* for Internet Explorer, Edge */
    	scrollbar-width: none; /* for Firefox */
   		overflow-y: scroll; 
	}

	body::-webkit-scrollbar {
		display: none; /* for Chrome, Safari, and Opera */
	}
`

export const FormatedTitle = styled.h2`
	font-weight: bolder;
	margin: 5rem 0 5rem;
	font-size: ${(props) => (props.sub ? '2rem' : '2.5rem')};
`

export const MainTextContainer = styled.div`
	margin: 5rem auto;

	background: #fff;
	max-width: 60rem;
	width: 60vw;

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
		margin: 1rem 0;
		list-style-type: square;
	}
`

export const GlobalNavbar = styled.div`
	position: fixed;
	width: calc(100vw + 1rem);
	height: 3.1rem;
	border-bottom-left-radius: 20px;

	transition: all 1s ease;
	top: 0;
	right: ${({ showNavbar }) =>
		showNavbar ? '0' : 'calc(-100% + 3.5rem - 1.25rem)'};
	background: #000;
`
