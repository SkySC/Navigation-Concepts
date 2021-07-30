import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledButton = styled.button`
	border: none;
	height: 4rem;
	width: 16rem;
	border-radius: 30px;
	background: transparent;
	cursor: pointer;
	font-size: 30px;
	margin-top: 2rem;

	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 1.5px;
	gap: 50px;
	transition: background 0.2s ease-in-out;

	&:hover {
		background: rgba(256, 256, 256, 0.1);
	}
`

const StyledLink = styled(Link)`
	text-decoration: none;
`

const Button = (props) => {
	return (
		<StyledLink onClick={props.onClick} to={props.path}>
			<StyledButton>{props.children}</StyledButton>
		</StyledLink>
	)
}

export default Button
