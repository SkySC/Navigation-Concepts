import styled from 'styled-components'

const StyledButton = styled.button`
	position: absolute;

	bottom: -20px;
	left: calc(50% - 4rem / 2);

	width: 4rem;
	height: 4rem;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 100%;
	cursor: pointer;
	background: #525252;

	transition: transform 0.7s ease;

	&:hover {
		transform: scale(0.9, 0.9) rotate(180deg);
	}

	display: flex;
	justify-content: center;
	align-items: center;

	&::before {
		content: '';
		position: absolute;
		width: 1.15rem;
		height: 0.2rem;
		background: #fff;
	}

	&::after {
		content: '';
		position: absolute;
		width: 0.2rem;
		height: 1.15rem;
		background: #fff;
	}
`

const AddNewProfileButton = (props) => {
	return <StyledButton onClick={props.onClick} />
}

export default AddNewProfileButton
