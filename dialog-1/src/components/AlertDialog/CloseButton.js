import styled from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'

const Button = styled(AiFillCloseCircle)`
	position: absolute;
	cursor: pointer;

	top: 0.5rem;
	right: 0.5rem;

	font-size: 1.5rem;
	color: #fff;
`

const CloseButton = (props) => {
	return <Button onClick={props.onClick} />
}

export default CloseButton
