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

const Community = () => {
	return (
		<>
			<MainTextContainer>
				<FormatedTitle>Community</FormatedTitle>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
				sed possimus neque sequi cum quaerat saepe ad soluta iusto
				repellendus? Ipsa rem at earum quisquam in vel similique
				nesciunt id qui voluptatum sed, praesentium ipsam autem
				temporibus perferendis, sit officia reprehenderit et accusantium
				optio, eligendi totam minima numquam cupiditate? Sit qui debitis
				aspernatur optio, consectetur cum facere nesciunt nihil maiores
				molestiae, ab exercitationem numquam expedita cumque quo dolorem
				soluta autem labore animi ducimus ipsa earum quam. Perspiciatis,
				molestias nesciunt? Sit.
				<Image img2 />
				<ul>
					<li>Lorem ipsum dolor sit.</li>
					<li>Lorem, ipsum dolor.</li>
					<li>Lorem ipsum dolor sit amet.</li>
				</ul>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Corporis velit veritatis reprehenderit tenetur laborum
				assumenda, laudantium enim nemo dolorem explicabo!
			</MainTextContainer>
		</>
	)
}

export default Community
