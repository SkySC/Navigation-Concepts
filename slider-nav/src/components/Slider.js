import styled from 'styled-components'
import { useState } from 'react'
import SlidingImages from './SlidingImages'

const SlidebarWrapper = styled.div`
	position: absolute;
	right: 0;
	left: 0;
	bottom: 15%;
	margin: auto;
	z-index: 1;

	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	gap: 15px;

	border-radius: 1.5rem;
	width: 13rem;
	height: 1.5rem;
	background: linear-gradient(to right, #f0c27b, #4b1248);
	box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.3);
`

const Radio = styled.input.attrs({ type: 'radio' })`
	display: none;

	+ label {
		cursor: pointer;
		width: 1.25rem;
		height: 0.39rem;
		background: rgba(0, 0, 0, 0.7);
	}

	&:checked + label {
		width: 1.25rem;
		height: 0.39rem;
		transition: background 0.3s;
		background: #fff;
	}
`

const Slider = () => {
	const [shiftUp, setShiftUpBy] = useState('0')

	return (
		<>
			<SlidebarWrapper>
				<Radio
					name='currentImage'
					id='img1'
					onClick={() => setShiftUpBy('0')}
				/>
				<label for='img1'></label>
				<Radio
					name='currentImage'
					id='img2'
					onClick={() => setShiftUpBy('-20%')}
				/>
				<label for='img2'></label>
				<Radio
					name='currentImage'
					id='img3'
					onClick={() => setShiftUpBy('-40%')}
				/>
				<label for='img3'></label>
				<Radio
					name='currentImage'
					id='img4'
					onClick={() => setShiftUpBy('-60%')}
				/>
				<label for='img4'></label>
				<Radio
					name='currentImage'
					id='img5'
					onClick={() => setShiftUpBy('-80%')}
				/>
				<label for='img5'></label>
			</SlidebarWrapper>
			<SlidingImages shift={shiftUp} />
		</>
	)
}

export default Slider
