import styled from 'styled-components'

const Button = styled.button`
	width: 7rem;
	height: 2.3rem;
	cursor: pointer;

	font-weight: 700;
	font-size: 0.9rem;
	letter-spacing: 0.1rem;
	border: 1px solid #fff;
	border-radius: 10px;
	background: transparent;
	color: #fff;

	&:hover {
		background: rgba(256, 256, 256, 0.1);
	}
`

const ConfirmButton = (props) => {
	return <Button onClick={props.onClick}>{props.children}</Button>
}

export default ConfirmButton
