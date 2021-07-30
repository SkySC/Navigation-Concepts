import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavContent2 from './NavContent2'

const SubnavWrapper = styled.div`
	position: absolute;
	height: 24rem;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-template-areas:
		'. .'
		'. .';
	left: 0;
	top: 75px;
	visibility: ${({ active }) => (active ? 'visible' : 'hidden')};
	opacity: ${({ active }) => (active ? '100%' : '0')};
	transition: all 0.4s ease-in-out;
`

const Item = styled(Link)`
	width: 100%;
	height: 100%;
	text-decoration: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${(props) => props.picURL}) center no-repeat;
	background-size: cover;
	filter: grayscale(1);
	box-shadow: 50px 50px 80px 0 #fff inset, -50px -50px 80px 0 #fff inset;
	transition: all 0.2s ease-in-out;

	&:hover {
		filter: grayscale(0.7);
		box-shadow: 20px 20px 30px 0 #fff inset, -20px -20px 30px 0 #fff inset;
	}
`

const FormatedCaption = styled.span`
	display: flex;
	justify-content: center;
	color: #fff;
	width: 50%;
	padding: 2px;
	background: rgba(0, 0, 0, 0.8);
`

const Subnav = ({ active }) => {
	return (
		<SubnavWrapper active={active}>
			{NavContent2.map((subItem, subIndex) => {
				return (
					<Item
						to={subItem.path}
						key={subIndex}
						picURL={subItem.pictureURL}>
						<FormatedCaption>{subItem.pictureDesc}</FormatedCaption>
					</Item>
				)
			})}
		</SubnavWrapper>
	)
}

export default Subnav
