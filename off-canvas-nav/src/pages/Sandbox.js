import { Box1, Box2, Box3, Box4, ContentWrapper } from '../globalStyles'

const Sandbox = ({ shifted }) => {
	return (
		<ContentWrapper shifted={shifted}>
			<Box1></Box1>
			<Box3>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
			</Box3>
			<Box3>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem.
			</Box3>
			<Box3>Lorem ipsum dolor sit amet.</Box3>
			<Box3>Lorem ipsum dolor sit.</Box3>
			<Box2></Box2>
			<Box3>Lorem ipsum dolor sit amet consectetur.</Box3>
			<Box3>Lorem, ipsum dolor sit amet consectetur adipisicing.</Box3>
			<Box3>Lorem ipsum dolor sit amet consectetur.</Box3>
			<Box3>Lorem ipsum dolor sit amet consectetur.</Box3>
			<Box4>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Dolorum officiis minus animi ratione rem eius cumque non
				laudantium. Eos autem quam, cumque nam fuga recusandae officia,
				libero aperiam quos voluptates quo distinctio excepturi,
				aspernatur adipisci laborum? Dolor placeat eveniet molestiae a
				obcaecati itaque ab ea nam iure ipsam! Dolor impedit sapiente
				repellendus enim, iste vitae numquam. Molestiae excepturi
				dolorum officiis molestias quas ex aspernatur quam iste sunt
				doloribus? Nulla obcaecati eaque impedit quod eos incidunt
				dolores expedita nam amet consectetur! Velit libero illum
				perspiciatis reiciendis alias quae molestias nostrum laboriosam?
			</Box4>
		</ContentWrapper>
	)
}

export default Sandbox
