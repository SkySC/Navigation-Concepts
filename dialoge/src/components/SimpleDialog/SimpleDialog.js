import CloseButton from './CloseButton'
import styled from 'styled-components'
import MenuButton from './MenuButton'
import AddNewProfileButton from './AddNewProfileButton'

const StyledDialog = styled.div`
	position: absolute;

	transition: all 0.5s ease;
	opacity: ${({ displayDialog }) => (displayDialog ? '100%' : '0%')};

	top: ${({ displayDialog }) => (displayDialog ? '0' : '-100%')};
	left: 0;
	right: 0;
	bottom: 0;

	margin: auto;

	width: 25%;
	min-width: 20rem;
	height: 25%;
	min-height: 16rem;
	background: linear-gradient(to right, #525252, #3d72b4);
	border-radius: 20px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 3px 4px 10px 3px rgba(0, 0, 0, 0.25);

	display: flex;
	align-content: center;
	justify-content: center;
	flex-direction: column;
`

const ButtonContainer = styled.div``

const DialogTitle = styled.span`
	position: absolute;
	top: 0.9rem;
	left: 1.3rem;
	color: #fff;
	font-weight: 500;
	letter-spacing: 0.1rem;
`

const Dialog = (props) => {
	return (
		<StyledDialog displayDialog={props.dialogOpen}>
			<DialogTitle>Wähle dein Profil</DialogTitle>
			<CloseButton onClick={() => props.handle('none')} />
			<ButtonContainer>
				<MenuButton onClick={() => props.handle('none')}>
					Pompeo942
				</MenuButton>
				<MenuButton onClick={() => props.handle('none')}>
					BadBoy43
				</MenuButton>
				<MenuButton onClick={() => props.handle('none')}>
					VelvetXY
				</MenuButton>
			</ButtonContainer>
			<AddNewProfileButton onClick={() => props.handle('none')} />
		</StyledDialog>
	)
}

export default Dialog
