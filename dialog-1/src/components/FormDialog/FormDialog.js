import AgreeButton from './AgreeButton'
import CloseButton from './CloseButton'

import styled from 'styled-components'

const StyledDialog = styled.div`
	position: absolute;

	transition: all 0.5s ease;
	opacity: ${({ displayDialog }) => (displayDialog ? '1' : '0')};
	transform: ${({ displayDialog }) =>
		displayDialog ? 'scale(1, 1)' : 'scale(0, 0)'};

	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	margin: auto;

	width: 40%;
	min-width: 40rem;
	height: 30%;
	min-height: 20rem;
	background: linear-gradient(to right, #403a3e, #be5869);
	box-shadow: 3px 4px 10px 3px rgba(0, 0, 0, 0.35);

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`

const TextContainer = styled.div`
	padding: 3rem;
	color: #fff;
	text-align: justify;
	line-height: 1.5rem;
`

const ButtonContainer = styled.div`
	display: flex;
	gap: 3rem;
`

const MailInput = styled.input.attrs({
	type: 'email',
	defaultValue: 'Email',
	name: 'name',
	htmlFor: 'mail',
})`
	height: 1.5rem;
	width: 100%;
	background: rgba(0, 0, 0, 0.2);
	border: 1px solid rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);

	color: lightgrey;
	font-size: 1rem;
	padding: 0.5rem;
`

const StyledMailLabel = styled.label`
	font-size: 1.15rem;
	letter-spacing: 0.1rem;

	${MailInput}:focus + & {
		color: black;
		font-size: 200px;
		background: green;
	}
`

const Form = styled.form`
	margin-top: 1.5rem;

	/*
	& ${MailInput}:focus + ${StyledMailLabel} {
		color: black;
		font-size: 200px;
		background: yellow;
	}
	*/
`

const FormDialog = (props) => {
	return (
		<StyledDialog displayDialog={props.dialogOpen}>
			<CloseButton onClick={() => props.handle('none')} />
			<TextContainer>
				{props.children}
				<Form>
					<StyledMailLabel>Email</StyledMailLabel>
					<MailInput></MailInput>
				</Form>
			</TextContainer>

			<ButtonContainer>
				<AgreeButton onClick={() => props.handle('none')}>
					Anmelden
				</AgreeButton>
			</ButtonContainer>
		</StyledDialog>
	)
}

export default FormDialog
