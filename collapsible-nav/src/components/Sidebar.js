import { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseSquare } from 'react-icons/ai'
import SidebarItem from './SidebarItem'
import SignInButton from './SignInButton'
import Data from './Data'

const StyledMainNav = styled.div`
	position: fixed;
	top: 0;
	height: 3.1rem;
	width: 100vw;
	background: linear-gradient(to left, #000000, #434343);
	z-index: 1;
`

const StyledOpenIcon = styled(GiHamburgerMenu)`
	margin: 12.5px;
	font-size: 1.5rem;
	cursor: pointer;
	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: #ffc300;
	}
`

const StyledCloseIcon = styled(AiFillCloseSquare)`
	font-size: 1.6rem;
	cursor: pointer;
	fill: #ffc300;
	transition: fill 0.2s ease-in-out;

	&:hover {
		fill: #fff;
	}
`

const StyledSidebar = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	background: linear-gradient(to right, #000000, #434343);
	width: 300px;
	height: 45rem;
	border-bottom-right-radius: 30px;
	z-index: 2;

	transition: left 0.4s ease;
	left: ${({ isVisible }) => (isVisible ? '0' : '-100%')};
`

const IconWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin: 0.5rem 0.5rem;
	margin-bottom: 2rem;
	gap: 20px;
`

const Sidebar = () => {
	const [sidebarVisible, setSidebarVisible] = useState(false)

	const toggleSidebar = () => setSidebarVisible(!sidebarVisible)

	return (
		<>
			<StyledMainNav>
				<StyledOpenIcon onClick={toggleSidebar} />
			</StyledMainNav>
			<StyledSidebar isVisible={sidebarVisible}>
				<IconWrapper>
					<StyledCloseIcon onClick={toggleSidebar} />
				</IconWrapper>
				{Data.map((item, index) => {
					return <SidebarItem item={item} index={index} />
				})}
				<SignInButton />
			</StyledSidebar>
		</>
	)
}

export default Sidebar
