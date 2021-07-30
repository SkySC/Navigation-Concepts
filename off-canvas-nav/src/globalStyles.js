import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri&display=swap');

	* {
		margin: 0;
		padding: 0;
		font-family: 'Hind Siliguri', sans-serif;
	}

	body {
		height: 100vh;
		background: linear-gradient(to right, #009fff, #ec2f4b);
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
	background: rgba(0, 0, 0, 0.3);
	border-radius: 15px;
	padding: 20px;
	position: absolute;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-template-areas:
		'. . . .'
		'. . . .'
		'. . . .'
		'. . . .';
	gap: 20px;
	width: 60rem;
	height: 85%;
	top: 0;
	right: 53px;
	bottom: 0;
	margin: auto;
	box-shadow: 9px 9px 20px -5px rgba(0, 0, 0, 0.3);

	transition: left 0.5s ease;
	left: ${({ shifted }) =>
		shifted ? 'calc(15.5rem + (15.5rem - 13rem))' : '0'};
`

export const Box1 = styled.div`
	background: url('https://images.pexels.com/photos/2694434/pexels-photo-2694434.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')
		center no-repeat;
	background-size: cover;
	filter: grayscale(1);
	grid-column: 1 / span 2;
	width: 100%;
	border-radius: 20px;
`

export const Box2 = styled.div`
	background: url('https://images.pexels.com/photos/2002719/pexels-photo-2002719.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
		center no-repeat;
	background-size: cover;
	filter: grayscale(1);
	grid-column: 3 / span 2;
	width: 100%;
	border-radius: 20px;
`

export const Box3 = styled.div`
	color: #fff;
	padding: 10px;
	line-height: 1.5rem;
	background: rgba(0, 0, 0, 0.4);
	width: 90%;
	border-radius: 20px;
`

export const Box4 = styled.div`
	color: #fff;
	padding: 10px;
	line-height: 1.5rem;
	grid-column: 1 / span 4;
	background: rgba(0, 0, 0, 0.4);
	width: 97%;
	border-radius: 20px;
`

export const Box5 = styled.div`
	color: #fff;
	padding: 10px;
	line-height: 1.5rem;
	grid-column: 1 / span 4;
	background: rgba(0, 0, 0, 0.4);
	width: 97%;
	border-radius: 20px;
`

export const Box6 = styled.div`
	background: url('https://images.pexels.com/photos/4966362/pexels-photo-4966362.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')
		center no-repeat;
	background-size: cover;
	filter: grayscale(1);
	color: #fff;
	padding: 10px;
	line-height: 1.5rem;
	grid-column: 1 / span 2;
	grid-row: 1 / span 2;
	width: 300px;
	height: 300px;
	border-radius: 50%;
`
