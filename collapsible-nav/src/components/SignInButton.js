import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled.button`
	border: none;
	margin-top: 5rem;
	font-size: 15px;
	font-weight: bolder;
	color: #000;
	width: 14rem;
	height: 2.2rem;
	cursor: pointer;
	background: #ffc300;
	padding: 5px 12px;
	border-radius: 15px;
	transition: all 0.35s ease-in-out;

	&:hover {
		border: 1.5px solid #ffc300;
		background: transparent;
		color: #fff;
	}
`

const LinkWrapper = styled(Link)`
	display: flex;
	justify-content: center;
	text-decoration: none;
`

const SignInButton = () => {
	return (
		<LinkWrapper to='/sign-in'>
			<StyledButton>Sign In</StyledButton>
		</LinkWrapper>
	)
}

export default SignInButton
