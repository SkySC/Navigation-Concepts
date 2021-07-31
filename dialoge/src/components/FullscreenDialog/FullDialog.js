import styled, { css } from 'styled-components'
import { RiCloseFill } from 'react-icons/ri'
import { HiColorSwatch } from 'react-icons/hi'
import { MdInvertColors } from 'react-icons/md'
import { BsFillCollectionFill } from 'react-icons/bs'
import { CgCollage } from 'react-icons/cg'

const StyledDialog = styled.div`
	position: fixed;
	display: flex;
	transition: bottom 0.5s ease;

	top: 0;
	left: 0;
	right: 0;
	bottom: ${({ displayDialog }) => (displayDialog ? '0' : '-200%')};

	margin: auto;

	width: 100vw;
	height: 100vh;
	background: linear-gradient(to right, #457fca, #5691c8);

	flex-direction: column;
`

const TextContainer = styled.div`
	padding: 2.5rem;
	color: #fff;
	text-align: justify;
	line-height: 1.5rem;
`

const DialogBar = styled.div`
	display: flex;

	top: 0;

	width: 100vw;
	height: 60px;
	background: #363636;
	box-shadow: 0 1px 5px 4px rgba(0, 0, 0, 0.1);
	align-items: center;
	color: #fff;
	gap: 2rem;
`

const DialogElement = styled.div`
	display: flex;
	cursor: pointer;

	width: 100vw;
	height: 70px;
	background: rgba(0, 0, 0, 0.2);
	border-bottom: 2px solid rgba(0, 0, 0, 0.3);
	align-items: center;
	color: #fff;
	gap: 2rem;

	&:hover {
		background: rgba(256, 256, 256, 0.05);
	}

	${(props) =>
		props.noBorder &&
		css`
			border: none;
		`}
`

const StyledRiCloseFill = styled(RiCloseFill)`
	cursor: pointer;
	font-size: 1.7rem;
	margin-left: 1.5rem;
`

const StyledHiColorSwatch = styled(HiColorSwatch)`
	font-size: 1.7rem;
	margin-left: 1.5rem;
	color: #fff;
	margin-left: 1.5rem;
`

const StyledMdInvertColors = styled(MdInvertColors)`
	font-size: 1.7rem;
	margin-left: 1.5rem;
	color: #fff;
	margin-left: 1.5rem;
`

const StyledBsFillCollectionFill = styled(BsFillCollectionFill)`
	font-size: 1.7rem;
	margin-left: 1.5rem;
	color: #fff;
	margin-left: 1.5rem;
`

const StyledCgCollage = styled(CgCollage)`
	font-size: 1.7rem;
	margin-left: 1.5rem;
	color: #fff;
	margin-left: 1.5rem;
`

const CurrentValueSet = styled.span`
	font-size: 0.7rem;
`

const Label = styled.span`
	display: flex;
	flex-direction: column;
`

const FullDialog = (props) => {
	return (
		<StyledDialog displayDialog={props.dialogOpen}>
			<DialogBar>
				<StyledRiCloseFill onClick={() => props.handle('none')} />
				Set Design
			</DialogBar>
			<DialogElement>
				<StyledHiColorSwatch />
				<Label>
					Color<CurrentValueSet>Limegreen</CurrentValueSet>
				</Label>
			</DialogElement>
			<DialogElement>
				<StyledMdInvertColors />
				<Label>
					Saturation<CurrentValueSet>61%</CurrentValueSet>
				</Label>
			</DialogElement>
			<DialogElement>
				<StyledBsFillCollectionFill />
				<Label>
					Theme<CurrentValueSet>Dracula Dark</CurrentValueSet>
				</Label>
			</DialogElement>
			<DialogElement noBorder>
				<StyledCgCollage />
				<Label>
					Layout<CurrentValueSet>Grid</CurrentValueSet>
				</Label>
			</DialogElement>
			<TextContainer>{props.children}</TextContainer>
		</StyledDialog>
	)
}

export default FullDialog
