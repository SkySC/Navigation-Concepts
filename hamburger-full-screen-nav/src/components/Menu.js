import { useState } from 'react'
import styled from 'styled-components'
import MenuContent from './MenuContent'
import Button from './Button'

import { FaBars } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'

const MenuWrapper = styled.div`
	position: fixed;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(to top, #1f4037, #99f2c8);

	transition: all 0.5s ease;
	top: ${({ isvisible }) => (isvisible ? '0' : '-100%')};
	opacity: ${({ isvisible }) => (isvisible ? '1' : '0')};
`

const ItemWrapper = styled.ul`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	list-style-type: none;
	text-align: center;
`

const IconWrapper = styled.div`
	display: flex;
	color: #fff;
`

const TextWrapper = styled.span`
	letter-spacing: 2px;
	font-weight: bolder;
	display: flex;
	color: #fff;
`

const StyledFaBars = styled(FaBars)`
	position: fixed;
	top: 0.75rem;
	right: 0.75rem;
	cursor: pointer;
	font-size: 1.5rem;
	color: #fff;

	transition: all 0.5s ease;
	transform: ${({ isvisible }) =>
		isvisible ? 'scale(0, 0)' : 'scale(1, 1)'};
`

const StyledGrClose = styled(AiFillCloseCircle)`
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	cursor: pointer;
	font-size: 2rem;
	color: #fff;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.25, 1.25);
	}
`

const Menu = () => {
	const [menuVisible, setMenuVisible] = useState(false)

	const toggleMenu = () => setMenuVisible(!menuVisible)

	return (
		<>
			<StyledFaBars onClick={toggleMenu} isvisible={menuVisible} />
			<MenuWrapper isvisible={menuVisible}>
				<StyledGrClose onClick={toggleMenu} isvisible={menuVisible} />
				<ItemWrapper>
					{MenuContent.map((item, index) => {
						return (
							<Button
								path={item.path}
								key={index}
								onClick={toggleMenu}>
								<IconWrapper>{item.icon}</IconWrapper>
								<TextWrapper>{item.text}</TextWrapper>
							</Button>
						)
					})}
				</ItemWrapper>
			</MenuWrapper>
		</>
	)
}

export default Menu
