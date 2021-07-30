import { FormatedHeading, FormatedText, ContentWrapper } from '../globalStyles'
import styled from 'styled-components'
import imageURL from '../images/pexels-fiona-art-3208282.jpg'

const RandomImage = styled.div`
	width: 100%;
	height: 25rem;
	margin-top: 3rem;
	background: url(${imageURL}) center no-repeat;
	border-radius: 50px;
	filter: grayscale(1);
	background-size: cover;
`

const Codepen = () => {
	return (
		<ContentWrapper>
			<FormatedHeading>Codepen</FormatedHeading>
			<FormatedText>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
				neque a sunt numquam quisquam reiciendis quasi quaerat itaque,
				iusto officiis porro explicabo aliquam unde, ratione iste
				assumenda atque dolorum, harum error! Iure a quibusdam fuga
				ullam aperiam id nihil alias pariatur perferendis, libero quos
				ipsam perspiciatis in rem error deleniti?
				<RandomImage />
			</FormatedText>
		</ContentWrapper>
	)
}

export default Codepen
