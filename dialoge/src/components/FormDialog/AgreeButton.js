import styled from 'styled-components'

const Button = styled.button`
	width: 8rem;
	height: 2.3rem;
	cursor: pointer;

	text-transform: uppercase;
	font-weight: 600;
	font-size: 0.9rem;
	letter-spacing: 0.15rem;
	border: transparent;
	background: transparent;
	color: #fff;

	transition: all 0.5s ease;

	&:hover {
		background: rgba(256, 256, 256, 0.02);
		border-radius: 8px;
		border: 1px solid rgba(256, 256, 256, 0.8);
	}
`

const AgreeButton = (props) => {
	return <Button onClick={props.onClick}>{props.children}</Button>
}

export default AgreeButton
