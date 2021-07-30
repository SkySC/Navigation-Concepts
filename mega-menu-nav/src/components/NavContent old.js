import pictureURL1 from '../images/pexels-jeswin-thomas-2874752.jpg'
import pictureURL2 from '../images/imagespexels-vitalna-3800117.jpg'
import pictureURL3 from '../images/pexels-satoshi-hirayama-4058526.jpg'
import pictureURL4 from '../images/pexels-sam-willis-1154619.jpg'
import pictureURL5 from '../images/pexels-ryutaro-tsukata-5220092.jpg'
import pictureURL6 from '../images/pexels-evgeny-tchebotarev-2235302.jpg'
import pictureURL7 from '../images/pexels-dlkr-life-5436913.jpg'
import pictureURL8 from '../images/pexels-alyssa-polaris-1859622.jpg'
import pictureURL9 from '../images/pexels-aleksandar-pasaric-4344748.jpg'
import {
	AiFillExperiment,
	AiFillBulb,
	AiFillCodeSandboxSquare,
	AiTwotoneSetting,
} from 'react-icons/ai'

const NavContent = [
	{
		text: 'Projects',
		path: '/projects',
		icon: <AiFillExperiment />,
		align: '1',
	},
	{
		text: 'Ideas',
		path: '/ideas',
		icon: <AiFillBulb />,
		align: '2',
		subnav: [
			{
				pictureURL: pictureURL1,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL2,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL3,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL4,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL5,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL6,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL7,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
			{
				pictureURL: pictureURL8,
				pictureAlt: 'Many people',
				pictureDesc: 'Picture Description',
			},
		],
	},
	{
		text: 'Settings',
		path: '/settings',
		icon: <AiTwotoneSetting />,
		align: '4',
	},
	{
		text: 'Sandbox',
		path: '/sandbox',
		icon: <AiFillCodeSandboxSquare />,
		align: '5',
	},
]

export default NavContent
