import styled from 'styled-components'
import MenuContent from './MenuContent'
import MenuItem from './MenuItem'
import Button from './Button'

const OffCanvasMenu = styled.nav`
	position: fixed;
	height: 100vh;
	width: 15.5rem;
	background: linear-gradient(to top, #009fff, #ec2f4b);
	padding-bottom: 1.5rem;
	box-shadow: -3px 3px 8px 4px rgba(0, 0, 0, 0.2);
	z-index: 1;

	transition: left 0.5s ease;
	left: ${({ canvasVisible }) => (canvasVisible ? '0' : '-11.375rem')};
`

const ContentWrapper = styled.ul`
	list-style-type: none;
	display: flex;
	flex-direction: column;
	padding-left: 0.15rem;
	box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.06);
`

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 12rem;
`

const OffCanvas = ({ visible, handle }) => {
	return (
		<OffCanvasMenu
			canvasVisible={visible}
			onMouseOut={() => handle()}
			onMouseOver={() => handle()}>
			<ContentWrapper>
				{MenuContent.map((item, index) => {
					return <MenuItem key={index} item={item} />
				})}
			</ContentWrapper>
			<ButtonWrapper>
				<Button />
			</ButtonWrapper>
		</OffCanvasMenu>
	)
}

export default OffCanvas
