import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import DropdownItem from './DropdownItem'

const StyledLink = styled(Link)`
	text-decoration: none;
	font-size: 20px;
	display: flex;
	align-items: center;
	padding: 0 2rem;
	height: 55px;
	transition: all 0.15s ease;

	&:hover {
		cursor: pointer;
		background: rgba(255, 255, 255, 0.2);
	}
`

const StyledTitle = styled.p`
	margin: 0 4.5rem 0 1.3rem;
`

const IconWrapper = styled.div`
	transition: transform 0.5s ease;
	transform: ${({ subNavActive }) =>
		subNavActive ? 'rotate(180deg)' : 'rotate(-180deg)'};
`

const SidebarItem = ({ item, index }) => {
	const [subNavIsActive, setSubNavIsActive] = useState(false)

	const toggleSubNav = () => setSubNavIsActive(!subNavIsActive)

	return (
		<>
			<StyledLink
				key={index}
				to={item.path}
				onClick={item.subMenu && toggleSubNav}>
				{item.icon}
				<StyledTitle>{item.text}</StyledTitle>
				<IconWrapper subNavActive={subNavIsActive}>
					{item.rightIcon}
				</IconWrapper>
			</StyledLink>
			{subNavIsActive &&
				item.subMenu.map((item, index) => {
					return <DropdownItem item={item} index={index} />
				})}
		</>
	)
}

export default SidebarItem
