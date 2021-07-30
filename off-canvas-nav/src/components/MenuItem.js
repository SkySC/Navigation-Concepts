import styled from 'styled-components'
import { Link } from 'react-router-dom'

const IconWrapper = styled.i`
	position: absolute;
	right: 0.6rem;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
	background: rgba(256, 256, 256, 0.15);
	box-shadow: 5px 0 5px -5px rgba(0, 0, 0, 0.05);
	transition: all 0.2s ease;

	&:hover {
		background: rgba(256, 256, 256, 0.3);
	}
`

const Item = styled(Link)`
	display: flex;
	width: 92%;
	height: 2.6rem;
	font-size: 21px;
	align-items: center;
	justify-content: flex-start;

	padding: 8px;
	border-top-right-radius: 25px;
	border-bottom-right-radius: 25px;
	margin-top: 1rem;
	text-transform: lowercase;
	letter-spacing: 0.7px;
	color: #fff;
	cursor: pointer;
	gap: 2.75rem;
	text-decoration: none;
	transition: background 0.2s ease;

	&:hover {
		& > ${IconWrapper} {
			transform: scale(1.25, 1.25);
		}
		background: rgba(256, 256, 256, 0.15);
	}
`

const MenuItem = ({ index, item }) => {
	return (
		<Item to={item.path} key={index}>
			{item.text}
			<IconWrapper>{item.icon}</IconWrapper>
		</Item>
	)
}

export default MenuItem
