import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Subnav from './Subnav'
import Subnav2 from './Subnav2'
import {
	AiFillExperiment,
	AiFillBulb,
	AiFillCodeSandboxSquare,
	AiTwotoneSetting,
} from 'react-icons/ai'

const Item = styled(Link)`
	text-decoration: none;
	color: #000;
	grid-column-start: ${(props) => props.align};
	display: flex;
	height: 75px;
	justify-content: center;
	align-items: center;
	font-size: 17px;
	gap: 10px;
	cursor: pointer;

	&:hover {
		.animate_icon {
			transform: scale(1.2, 1.2);
			background: #000;
			color: #fff;
		}

		.animate_title {
			&:hover {
				&::before,
				&::after {
					width: 50%;
					opacity: 1;
				}
			}
		}
	}
`

const IconWrapper = styled.div`
	width: 1.6rem;
	height: 1.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 1px solid #000;
	transition: all 0.3s ease;
`

const TitleWrapper = styled.div`
	position: relative;

	&::before {
		left: 50%;
		position: absolute;
		content: '';
		width: 0;
		height: 0.15rem;
		margin-top: 20px;
		background: #000;
		opacity: 0;
		transition: all 0.2s ease-in-out;
	}

	&::after {
		right: 50%;
		position: absolute;
		content: '';
		width: 0;
		height: 0.15rem;
		margin-top: 20px;
		background: #000;
		opacity: 0;
		transition: all 0.2s ease-in-out;
	}
`

const NavItems = () => {
	const [subnavActive, setSubnavActive] = useState(false)
	const [subnavActive2, setSubnavActive2] = useState(false)

	const enableSubnav = () => setSubnavActive(true)
	const disableSubnav = () => setSubnavActive(false)

	const enableSubnav2 = () => setSubnavActive2(true)
	const disableSubnav2 = () => setSubnavActive2(false)

	return (
		<>
			<Item
				align='1'
				onMouseOver={enableSubnav}
				onMouseLeave={disableSubnav}>
				<IconWrapper className='animate_icon'>
					<AiFillExperiment />
				</IconWrapper>
				<TitleWrapper className='animate_title'>Projects</TitleWrapper>
				<Subnav active={subnavActive} />
			</Item>
			<Item
				align='2'
				onMouseOver={enableSubnav2}
				onMouseLeave={disableSubnav2}>
				<IconWrapper className='animate_icon'>
					<AiFillBulb />
				</IconWrapper>
				<TitleWrapper className='animate_title'>Ideas</TitleWrapper>
				<Subnav2 active={subnavActive2} />
			</Item>
			<Item to='/settings' align='4'>
				<IconWrapper className='animate_icon'>
					<AiTwotoneSetting />
				</IconWrapper>
				<TitleWrapper className='animate_title'>Settings</TitleWrapper>
			</Item>
			<Item to='/sandbox' align='5'>
				<IconWrapper className='animate_icon'>
					<AiFillCodeSandboxSquare />
				</IconWrapper>
				<TitleWrapper className='animate_title'>Sandbox</TitleWrapper>
			</Item>
		</>
	)
}

export default NavItems
