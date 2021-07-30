import { AiFillShopping } from 'react-icons/ai'
import { RiContactsFill, RiWechatLine } from 'react-icons/ri'
import { SiAboutDotMe } from 'react-icons/si'
import { FaQuestion, FaNewspaper } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import { BsFillPeopleFill } from 'react-icons/bs'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import styled from 'styled-components'

const StyledArrowIcon = styled(CgArrowsExchangeAltV)`
	fill: #ffc300;
	transition: all 0.3s ease;

	&:hover {
		border-radius: 50%;
		background-color: rgba(255, 255, 255, 0.1);
		transition: background-color 0.15s ease-in;
		transform: rotate(180deg);
	}
`

const Data = [
	{
		text: 'News',
		path: '/news',
		icon: <FaNewspaper />,
	},
	{
		text: 'Community',
		path: '/community',
		icon: <BsFillPeopleFill />,
	},
	{
		text: 'Shop',
		path: '/shop',
		icon: <AiFillShopping />,
	},
	{
		text: 'Support',
		icon: <BiSupport />,
		rightIcon: <StyledArrowIcon size='20' />,
		subMenu: [
			{
				text: 'Live Chat',
				path: '/support/chat',
				icon: <RiWechatLine size='16' />,
			},
			{
				text: 'Contact',
				path: '/support/contact',
				icon: <RiContactsFill size='16' />,
			},
			{
				text: 'FAQ',
				path: '/support/FAQ',
				icon: <FaQuestion size='16' />,
			},
		],
	},
	{
		text: 'About',
		path: '/about',
		icon: <SiAboutDotMe />,
	},
]

export default Data
