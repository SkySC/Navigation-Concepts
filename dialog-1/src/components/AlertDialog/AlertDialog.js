import ConfirmButton from './ConfirmButton'
import CloseButton from './CloseButton'
import styled from 'styled-components'

const StyledDialog = styled.div`
	position: absolute;

	transition: all 0.5s ease;
	opacity: ${({ displayDialog }) => (displayDialog ? '100%' : '0%')};

	top: 0;
	left: ${({ displayDialog }) => (displayDialog ? '0' : '-100%')};
	right: 0;
	bottom: 0;

	margin: auto;

	width: 40%;
	min-width: 20rem;
	height: 30%;
	min-height: 15rem;
	background: linear-gradient(to right, #b24592, #f15f79);
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 3px 4px 10px 3px rgba(0, 0, 0, 0.35);

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const TextContainer = styled.div`
	padding: 2.5rem;
	color: #fff;
	text-align: justify;
	line-height: 1.5rem;
`

const ButtonContainer = styled.div`
	display: flex;
	gap: 3rem;
`

const AlertDialog = (props) => {
	return (
		<StyledDialog displayDialog={props.dialogOpen}>
			<CloseButton onClick={() => props.handle('none')} />
			<TextContainer>{props.children}</TextContainer>
			<ButtonContainer>
				<ConfirmButton onClick={() => props.handle('none')}>
					Ablehnen
				</ConfirmButton>
				<ConfirmButton onClick={() => props.handle('none')}>
					Zustimmen
				</ConfirmButton>
			</ButtonContainer>
		</StyledDialog>
	)
}

export default AlertDialog
