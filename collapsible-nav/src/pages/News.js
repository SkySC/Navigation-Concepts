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
				<FormatedTitle>News</FormatedTitle>
				<FormatedTitle sub>Today</FormatedTitle>
				<Image img2 />
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
				suscipit omnis sequi consequuntur unde deserunt qui aut,
				possimus minima maiores molestiae! Suscipit libero, eaque odit
				placeat totam nesciunt, modi quod non tenetur vitae dicta quas
				iste. Perspiciatis recusandae illo suscipit rerum libero
				necessitatibus quos maxime dolore laudantium voluptatibus et
				dignissimos, voluptatum ullam voluptates ab odio sint corrupti
				molestias ratione culpa ipsam! Ratione impedit nobis quidem,
				magnam blanditiis repellendus omnis perspiciatis modi quia
				dolore totam ipsam voluptates sint aut nihil eum voluptate
				aspernatur accusamus nostrum itaque labore nisi aliquid maiores!
				Aut, tempora incidunt assumenda minima dicta nam repellat cumque
				dolores distinctio magni, exercitationem, doloremque nihil. Enim
				totam, minima autem sapiente assumenda quia aperiam iure,
				recusandae in asperiores aliquid pariatur magni esse fuga
				doloribus ut quam dicta obcaecati neque quis numquam sit nihil.
				Iste dolor odit at, quaerat eum ipsam, id asperiores
				consequuntur in officia deserunt! Ea reprehenderit corporis
				error repellat libero excepturi adipisci maiores dolorem
				laudantium! Dicta explicabo eum maiores cum ea quos, quidem
				assumenda velit, sit ratione neque unde laborum dolorem
				deleniti, facere error natus earum laudantium aut minima
				possimus?
				<FormatedTitle sub>Last Week</FormatedTitle>
				<Image img1 />
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro
				voluptates deserunt commodi, vero aperiam impedit sit voluptatem
				laudantium officia minima doloribus iure deleniti. Cum libero
				tenetur illo nesciunt modi vitae iste necessitatibus! At nobis
				quis fuga saepe facilis maxime, voluptatum officia similique
				ipsam, quaerat impedit repudiandae omnis hic fugit reiciendis
				odio. Molestiae aperiam deserunt pariatur nihil. Fugit neque
				incidunt perferendis reiciendis recusandae ipsa ipsam ullam, hic
				accusamus totam, modi facilis eum vero! Dignissimos a iure
				dolore sed culpa id commodi at illum? Molestiae ad, nulla quod
				doloribus, eum omnis quasi assumenda eligendi harum hic est? Vel
				voluptatibus ut dolor non delectus provident reiciendis quasi
				explicabo iusto esse cupiditate eaque praesentium eligendi,
				earum quo. Autem fugit quidem praesentium accusamus magni est!
			</MainTextContainer>
		</>
	)
}

export default Contact
