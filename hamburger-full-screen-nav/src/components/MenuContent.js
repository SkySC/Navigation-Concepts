import { SiAboutDotMe, SiGooglemessages } from 'react-icons/si'
import { AiFillShopping } from 'react-icons/ai'
import { BsFillChatDotsFill } from 'react-icons/bs'

const MenuContent = [
	{
		text: 'News',
		path: '/news',
		icon: <SiGooglemessages />,
	},
	{
		text: 'Shop',
		path: '/shop',
		icon: <AiFillShopping />,
	},
	{
		text: 'Chat',
		path: '/chat',
		icon: <BsFillChatDotsFill />,
	},
	{
		text: 'About',
		path: '/about',
		icon: <SiAboutDotMe />,
	},
]

export default MenuContent
