import styled from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'

const Button = styled(AiFillCloseCircle)`
	position: absolute;
	cursor: pointer;

	top: 0.7rem;
	right: 0.7rem;

	font-size: 1.65rem;
	color: #fff;
	box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);

	transition: transform 0.5s ease;

	&:hover {
		transform: scale(120%, 120%);
	}
`

const CloseButton = (props) => {
	return <Button onClick={props.onClick} />
}

export default CloseButton
