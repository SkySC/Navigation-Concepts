import { FormatedHeading, FormatedText, ContentWrapper } from '../globalStyles'
import styled from 'styled-components'
import imageURL from '../images/pexels-fiona-art-3208282.jpg'

const RandomImage = styled.div`
	width: 100%;
	height: ${(props) => (props.small ? 'calc(25rem/2 - 0.5rem)' : '25rem')};
	background: url(${imageURL}) center no-repeat;
	border-radius: 50px;
	filter: ${(props) => (props.small ? 'grayscale(0)' : 'grayscale(1.0)')};
	background-size: cover;
	margin-top: 1rem;
`

const ImageContainer = styled.div`
	margin-top: 3rem;
	display: flex;
	gap: 1rem;
`

const SmallImageContainer = styled.div`
	flex-direction: column;
	width: 100%;
`

const Meetup = () => {
	return (
		<ContentWrapper>
			<FormatedHeading>Meetup</FormatedHeading>
			<FormatedText>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit.
				Voluptatibus nesciunt quidem consequatur est nisi soluta vero
				qui. Autem adipisci eius velit veniam, atque ullam culpa esse
				nemo harum, illum tenetur, ut repellendus recusandae asperiores
				quidem in exercitationem est laboriosam! Minus quo laudantium
				sequi voluptates sed consequuntur perferendis culpa fugiat
				ipsam!
				<ImageContainer>
					<RandomImage />
					<SmallImageContainer>
						<RandomImage small />
						<RandomImage small />
					</SmallImageContainer>
				</ImageContainer>
			</FormatedText>
		</ContentWrapper>
	)
}

export default Meetup
