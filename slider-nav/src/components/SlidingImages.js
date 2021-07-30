import styled from 'styled-components'
import ImageURLs from './ImageURLs'

const SlideWrapper = styled.div`
	position: absolute;
	height: 500%;
	width: 100%;
	display: flex;
	flex-direction: column;
	transition: transform 0.5s;
	transform: translateY(${(props) => props.shift});
`

const ImageWrapper = styled.div`
	height: 43rem;
	width: 60rem;
	filter: grayscale(1);
	background: url(${(props) => props.url}) center no-repeat;
	background-size: cover;

	display: flex;
	justify-content: center;
	align-items: center;

	color: #fff;
`

const StyledTitle = styled.span`
	font-weight: 900;
	background: rgba(0, 0, 0, 0.5);
	padding: 0.2rem 0.6rem;
	border-radius: 20px;
	font-size: 2.5rem;
	letter-spacing: 0.15rem;
`

const StyledText = styled.span`
	line-height: 1.6rem;
	font-size: 16px;
	margin-top: 1rem;
`

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 4rem 10rem;
	background: rgba(0, 0, 0, 0.5);
`

const SlidingImages = ({ shift }) => {
	return (
		<SlideWrapper shift={shift}>
			{ImageURLs.map((item, index) => {
				return (
					<ImageWrapper key={index} url={item.url}>
						<ContentWrapper>
							<StyledTitle>{item.title}</StyledTitle>
							<StyledText>{item.desc}</StyledText>
						</ContentWrapper>
					</ImageWrapper>
				)
			})}
		</SlideWrapper>
	)
}

export default SlidingImages
