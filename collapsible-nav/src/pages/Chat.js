import { FormatedTitle, MainTextContainer } from '../globalStyles'
import styled from 'styled-components'
import imgURL1 from '../images/pexels-fauxels-3183135.jpg'
import imgURL2 from '../images/pexels-flo-dahm-699459.jpg'

const Image = styled.div`
	background: ${(props) =>
		props.img1
			? `url(${imgURL1}) no-repeat center`
			: props.img2
			? `url(${imgURL2}) no-repeat center`
			: ''};
	background-size: cover;

	width: 100%;
	height: 30rem;
	margin: 2rem 0;
`

const Chat = () => {
	return (
		<>
			<MainTextContainer>
				<FormatedTitle>Support / Chat</FormatedTitle>
				<Image img1 />
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Cupiditate veniam vero officiis consequatur consectetur culpa
				aliquid, totam delectus velit commodi!
				<Image img2 />
			</MainTextContainer>
		</>
	)
}

export default Chat
