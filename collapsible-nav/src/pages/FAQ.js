import { FormatedTitle, MainTextContainer } from '../globalStyles'
import styled from 'styled-components'
import imgURL1 from '../images/pexels-josh-sorenson-1714208.jpg'
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
	filter: grayscale(0.8);
`

const Contact = () => {
	return (
		<>
			<MainTextContainer>
				<FormatedTitle>Support / FAQ</FormatedTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Expedita unde saepe eos iure totam? Officiis odio corporis
				quibusdam.
				<Image img1 />
			</MainTextContainer>
		</>
	)
}

export default Contact
