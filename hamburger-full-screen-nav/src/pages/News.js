import { FormatedTitle, MainTextContainer } from '../globalStyles'
import styled from 'styled-components'
import imgURL1 from '../images/pexels-luis-del-río-15286.jpg'
import imgURL2 from '../images/pexels-aleksey-kuprikov-3493777.jpg'

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

const News = () => {
	return (
		<MainTextContainer>
			<FormatedTitle>News</FormatedTitle>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
			labore delectus aperiam illo cupiditate possimus, molestias minima
			pariatur. Blanditiis saepe aut deleniti molestiae, repellendus odit
			culpa at, quaerat ipsam alias vitae neque cupiditate temporibus,
			animi in velit debitis expedita vero?
			<Image img1 />
			<FormatedTitle sub>Japan</FormatedTitle>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
			vitae animi ipsam? Quaerat, voluptas dolores. Magni minima ipsam
			aut. Illo praesentium dolor mollitia placeat porro corrupti quaerat
			nisi necessitatibus quod blanditiis iste, eius dolores voluptate
			minus libero quisquam. Voluptate modi, natus in dolorem placeat a
			ut, labore esse recusandae eius eum optio non architecto, suscipit
			cupiditate unde ea? Aspernatur explicabo impedit fugit asperiores
			eius, repellendus repellat consequuntur expedita dignissimos
			exercitationem. Odit totam nam tempora eum consectetur quae, fugit
			cupiditate est aspernatur architecto ipsa commodi? Molestiae aperiam
			officia fuga numquam dignissimos consectetur nostrum, dolorem sunt
			eius consequuntur voluptatum. Iusto saepe assumenda reiciendis sed
			sapiente quidem, beatae aut nobis eius iste ab consectetur
			temporibus. Quasi eius obcaecati aut, maxime ipsum tempora esse
			exercitationem eaque animi minima aliquid, reprehenderit explicabo
			omnis incidunt voluptate consequuntur iste, voluptates illo repellat
			velit quis! Quibusdam libero itaque voluptates omnis nostrum. Sed
			aspernatur, esse libero provident praesentium molestias accusantium
			inventore culpa delectus deserunt, voluptas eaque eligendi. Id
			provident, quos libero laudantium accusantium maxime corrupti
			officia vitae harum accusamus commodi mollitia facilis ipsam
			distinctio molestias delectus porro necessitatibus? Numquam impedit
			facere, ducimus quibusdam adipisci facilis magnam officiis odio
			cumque dolores dignissimos iure reiciendis ab provident ea sunt
			corrupti aliquid!
			<Image img2 />
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ad
			voluptate nisi sint? Provident necessitatibus quia maxime voluptatem
			aperiam labore, earum hic quis magni recusandae! Modi voluptatum
			dignissimos maiores blanditiis?
		</MainTextContainer>
	)
}

export default News
