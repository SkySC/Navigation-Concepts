import { FormatedTitle, ContentWrapper, TextContainer } from '../globalStyles'
import imgURL from '../images/pexels-satoshi-hirayama-4058526.jpg'
import styled from 'styled-components'

const Image = styled.div`
	margin-top: 1.5rem;
	background: url(${imgURL}) no-repeat center;
	background-size: cover;
	width: 100%;
	height: 25rem;
	filter: grayscale(0.3);
	border-radius: 15px;
`

const Desc4 = () => {
	return (
		<ContentWrapper>
			<TextContainer>
				<FormatedTitle>Description 4</FormatedTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in
				magnam a, repellendus modi laudantium repudiandae, nobis et
				voluptas ad harum ipsum dolores quas! Recusandae, accusantium
				nulla. Debitis autem reiciendis eveniet repudiandae quisquam
				illo tempora doloremque libero eaque officia atque nisi vel
				deserunt officiis quidem rerum accusamus cum non, quibusdam
				animi. Maiores, voluptas minima enim unde quas itaque blanditiis
				tenetur esse ipsam! Qui laboriosam totam est ipsum consectetur
				optio, sint facere. Sed, corporis doloremque facere molestiae
				itaque mollitia eligendi repellat tenetur expedita voluptas
				architecto repudiandae. Itaque natus doloremque modi tempora?
				<Image />
			</TextContainer>
		</ContentWrapper>
	)
}

export default Desc4
