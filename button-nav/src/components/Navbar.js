import styled from 'styled-components'
import NavContent from './NavContent'
import { Link } from 'react-router-dom'

const NavbarWrapper = styled.div`
	position: fixed;
	bottom: 30px;
	width: 576px;
	left: 50%;
	margin-left: -288px;
	height: 60px;
	border-radius: 13px;
	background: linear-gradient(to right, #fc5c7d, #6a82fb);
	box-shadow: 2px 0 10px 0 rgba(0, 0, 0, 0.2);
	overflow: hidden;

	display: flex;
	justify-content: center;
	align-items: center;
`

const FormatedLinkIcon = styled(Link)`
	cursor: pointer;
	display: flex;
	flex: 0 0 55px;
	justify-content: center;
	align-items: center;
	padding: 7px;
	margin: 0 10px 0 10px;
	font-size: 1.5rem;
	color: #fff;
	height: 45px;
	will-change: transform;
	transition: all 0.13s ease-in-out;

	&:hover {
		transform: scale(1.25, 1.25);
		background: rgba(256, 256, 256, 0.08);
	}
`

const VerticalBar = styled.div`
	border-radius: 30px;
	height: 80%;
	width: 1px;
	background: rgba(0, 0, 0, 0.1);
`

const Navbar = () => {
	return (
		<NavbarWrapper>
			{NavContent.map((item, index) => {
				return (
					<>
						<FormatedLinkIcon to={item.path} key={index}>
							{item.icon}
						</FormatedLinkIcon>
						{index < '5' && <VerticalBar />}
					</>
				)
			})}
		</NavbarWrapper>
	)
}

export default Navbar
