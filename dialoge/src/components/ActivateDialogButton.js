import styled from 'styled-components'

const Button = styled.button`
	transition: all 0.4s;
	transition-timing-function: linear, step-end;
	opacity: ${({ dialogOpen }) => (dialogOpen ? '0%' : '100%')};
	visibility: ${({ dialogOpen }) => (dialogOpen ? 'hidden' : 'visible')};

	width: 70%;
	padding: 1em;
	cursor: pointer;
	background: #fff;
	font-weight: 700;
	font-size: 1rem;
	border: none;
	border-radius: 10px;
`

const ActivateDialogButton = (props) => {
	return (
		<Button dialogOpen={props.dialogOpen} onClick={props.onClick}>
			{props.children}
		</Button>
	)
}

export default ActivateDialogButton
