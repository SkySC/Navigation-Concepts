import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Item = styled(Link)`
	grid-column-start: ${(props) => props.align};
	display: flex;
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
	width: 26px;
	height: 26px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	border: 1px solid #000;
	transition: all 0.1s ease;
`

const TitleWrapper = styled.div`
	position: relative;
	transition: all 0.1s ease;

	&::before {
		left: 50%;
		position: absolute;
		content: '';
		width: 0;
		height: 2.5px;
		margin-top: 20px;
		background: #000;
		opacity: 0;
	}

	&::after {
		right: 50%;
		position: absolute;
		content: '';
		width: 0;
		height: 2.5px;
		margin-top: 20px;
		background: #000;
		opacity: 0;
	}
`

const NavItem = ({ item, index }) => {
	const [subnavActive, setSubnavActive] = useState(false)

	const enableSubnavWithIndex = () => setSubnavActive(true)
	const disableSubnavWithIndex = () => setSubnavActive(false)

	return (
		<Item
			as='li'
			key={index}
			to={item.path}
			align={item.align}
			onMouseOver={enableSubnavWithIndex}
			onMouseLeave={disableSubnavWithIndex}>
			<IconWrapper className='animate_icon'>{item.icon}</IconWrapper>
			<TitleWrapper className='animate_title'>{item.text}</TitleWrapper>
			<Subnav active={subnavActive} />
		</Item>
	)
}

export default NavItem
