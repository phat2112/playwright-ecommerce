import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	padding: 15px;
	display: flex;
	gap: 30px;
	box-shadow: 0px 8px 24px rgba(228, 231, 242, 0.4);
	border-bottom: 1px solid #e4e7f2;
`;

export const CustomLink = styled(NavLink)`
	text-decoration: none;
	font-weight: 700;
	&:hover,
	&.active {
		color: #2e71ee;
	}
`;
