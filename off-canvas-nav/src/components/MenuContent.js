import { SiAboutDotMe } from 'react-icons/si'
import {
	AiFillHeart,
	AiFillExperiment,
	AiFillBulb,
	AiOutlineBehanceSquare,
	AiFillCodeSandboxSquare,
	AiTwotoneSetting,
} from 'react-icons/ai'

const MenuContent = [
	{
		text: 'Projects',
		path: '/projects',
		icon: <AiFillExperiment />,
	},
	{
		text: 'Favourites',
		path: '/favs',
		icon: <AiFillHeart />,
	},
	{
		text: 'Ideas',
		path: '/ideas',
		icon: <AiFillBulb />,
	},
	{
		text: 'Settings',
		path: '/settings',
		icon: <AiTwotoneSetting />,
	},
	{
		text: 'Sandbox',
		path: '/sandbox',
		icon: <AiFillCodeSandboxSquare />,
	},
	{
		text: 'Portfolio',
		path: '/portfolio',
		icon: <AiOutlineBehanceSquare />,
	},
	{
		text: 'About',
		path: '/about',
		icon: <SiAboutDotMe />,
	},
]

export default MenuContent
