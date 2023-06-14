import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	padding: 15px;
	display: flex;
	gap: 30px;
	box-shadow: 0px 8px 24px rgba(228, 231, 242, 0.4);
	border-bottom: 1px solid #e4e7f2;
	& > * {
		text-decoration: none;
		font-weight: 700;
		transition: 0.3s ease-in-out;
		&:hover,
		&.active {
			color: #ff0f5b;
		}
	}
`;

export const CustomHeaderItem = styled.p`
	margin-left: auto;
	cursor: pointer;
`;
