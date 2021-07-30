import styled from 'styled-components'
import { AiFillTaobaoCircle } from 'react-icons/ai'
import NavItems from './NavItems'

const Navbar = styled.nav`
	position: fixed;
	height: 75px;
	width: 100vw;
	background: #f5f5f5;
	z-index: 1;
`

const ContentWrapper = styled.ul`
	height: 100%;
	display: grid;
	align-content: center;
	justify-content: center;
	grid-template-columns: 15% 15% 40% 15% 15%;
	grid-auto-flow: column;
	list-style-type: none;
	text-transform: uppercase;
`

const LogoWrapper = styled.div`
	grid-column-start: 3;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	font-weight: bolder;
	gap: 15px;
`

const TopNav = () => {
	return (
		<Navbar>
			<ContentWrapper>
				<LogoWrapper as='li'>
					<AiFillTaobaoCircle size='45px' />
					Mega Menu
				</LogoWrapper>
				<NavItems />
			</ContentWrapper>
		</Navbar>
	)
}

export default TopNav
