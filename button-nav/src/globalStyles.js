import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Nunito&family=Roboto+Mono&display=swap');

    * {
        margin: 0;
        padding: 0;
        font-family: 'Nunito', sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
        background: linear-gradient(to right, #fc5c7d, #6a82fb);
    }
`

export const FormatedHeading = styled.span`
	font-size: 24px;
	font-weight: bolder;
`

export const FormatedText = styled.span`
	max-width: 60rem;
	padding: 0 13rem;
	margin-top: 1rem;
	font-size: 16px;
`

export const ContentWrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: 60px auto;
	background: #fff;
	border-radius: 20px;
	height: 80vh;
	width: 80vw;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
