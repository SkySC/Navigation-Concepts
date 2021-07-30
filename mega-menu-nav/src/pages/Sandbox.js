import { FormatedTitle, ContentWrapper, TextContainer } from '../globalStyles'
import imgURL1 from '../images/pexels-ryutaro-tsukata-5220092.jpg'
import imgURL2 from '../images/pexels-aleksandar-pasaric-4344748.jpg'
import styled from 'styled-components'

const Image = styled.div`
	background: ${(props) =>
		props.img1
			? `url(${imgURL1}) no-repeat center`
			: props.img2
			? `url(${imgURL2}) no-repeat center`
			: ''};
	background-size: cover;
	width: 45%;
	height: 18rem;
	filter: grayscale(0.4);
	border-radius: 15px;
`

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin: 1.5rem 0;
`

const Sandbox = () => {
	return (
		<ContentWrapper>
			<TextContainer>
				<FormatedTitle>Sandbox</FormatedTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
				adipisci, repellendus obcaecati perspiciatis, in qui
				consequuntur ab sint dicta iure dignissimos doloremque quam
				fugit quaerat.
				<ImageContainer>
					<Image img1 />
					<Image img2 />
				</ImageContainer>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				Doloremque expedita veniam adipisci debitis laborum eveniet. Ea
				placeat tempore consequuntur illo repellat dolorum provident
				amet ex corporis quisquam, ipsum inventore distinctio deserunt
				quam est pariatur natus quo minus et molestias possimus hic.
				Itaque ullam sunt asperiores qui facilis quaerat amet sapiente!
			</TextContainer>
		</ContentWrapper>
	)
}

export default Sandbox
