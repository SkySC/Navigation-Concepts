import styled from 'styled-components'
import { CgProfile } from 'react-icons/cg'

const Button = styled.button`
	width: 100%;
	height: 3.2rem;
	cursor: pointer;

	font-weight: 600;
	font-size: 1rem;
	letter-spacing: 0.2rem;
	text-align: left;

	border: transparent;
	background: transparent;
	color: #fff;

	transition: all 0.5s ease;

	&:hover {
		background: rgba(256, 256, 256, 0.2);
	}
`

const ProfileIcon = styled(CgProfile)`
	font-size: 2.5rem;
`

const PositionContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 65%;
	margin: auto;
`

const MenuButton = (props) => {
	return (
		<Button onClick={props.onClick}>
			<PositionContainer>
				<ProfileIcon />
				{props.children}
			</PositionContainer>
		</Button>
	)
}

export default MenuButton
