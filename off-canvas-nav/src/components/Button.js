import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledLinkButton = styled(Link)`
	text-decoration: none;
	height: 2.5rem;
	width: 7.3rem;
	cursor: pointer;
	font-size: 16px;
	text-transform: lowercase;
	letter-spacing: 1.5px;
	color: #fff;
	border: none;
	border-radius: 30px;
	background: linear-gradient(to left, #009fff, #ec2f4b);
	background-size: 200% 200%;
	transition: transform 1s ease, font-size 1s ease;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		transform: scale(1.2, 1.2);
		font-size: 17px;
		animation: animateGradient 1.9s linear 1 none running;
	}

	@keyframes animateGradient {
		0% {
			background-position: 0% 100%;
		}

		50% {
			background-position: 50%;
		}

		100% {
			background-position: 0% 100%;
		}
	}
`

const Button = () => {
	return <StyledLinkButton to={'/sign-in'}>Sign In</StyledLinkButton>
}

export default Button
