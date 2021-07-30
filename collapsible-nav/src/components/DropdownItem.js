import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledDropdownLink = styled(Link)`
	text-decoration: none;
	font-size: 20px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding: 0 2.5rem;
	height: 55px;
	background: #333333;
	border-left: 7px solid #ffc300;
	transition: all 0.15s ease-in-out;

	&:hover {
		cursor: pointer;
		background: #ffc300;
		border-color: #111;

		p {
			color: black;
			font-weight: bolder;
		}
	}
`

const StyledTitle = styled.p`
	margin-left: 25px;
`

const DropdownItem = ({ item, index }) => {
	return (
		<StyledDropdownLink key={index} to={item.path}>
			{item.icon}
			<StyledTitle>{item.text}</StyledTitle>
		</StyledDropdownLink>
	)
}

export default DropdownItem
