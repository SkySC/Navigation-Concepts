import styled, { createGlobalStyle } from 'styled-components'
import bg from './images/pexels-evgeny-tchebotarev-2235302.jpg'

export const GlobalStyle = createGlobalStyle`

	@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap');

	* {
		margin: 0;
		padding: 0;
		font-family: 'Roboto Condensed', sans-serif;
	}

	body {
		min-height: 100vh;
		background-image: url(${bg});
		background-size: cover;
		background-position: center;
	}

	#bg_blur {
		position: absolute;
		height: 100vh;
		width: 100vw;
		backdrop-filter: blur(5px) grayscale(0.9);
	}

	#edge_blur {
		position: fixed;
		bottom: 0;
		height: 125px;
		width: 100vw;
		background: rgba(0, 0, 0, 0.6);
		filter: blur(125px);
	}

	.show-heading {
		color: #000;
		display: flex;
		position: relative;
		height: 90vh;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
	}
`

export const ContentWrapper = styled.div`
	color: #fff;
	line-height: 1.8rem;
	word-spacing: 0.2rem;
	hyphens: auto;
	text-align: justify;
	background: rgba(0, 0, 0, 0.65);
	padding: 25px;

	position: absolute;
	height: 70%;
	top: 75px;
	left: 0;
	right: 0;
	bottom: 0;

	margin: auto;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const TextContainer = styled.div`
	max-width: 60rem;

	& > ul {
		margin: 2rem 2rem;
	}
`

export const FormatedTitle = styled.h2`
	font-weight: bolder;
	margin-bottom: 20px;
`
