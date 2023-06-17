import styled from 'styled-components';

export const Wrapper = styled.div`
	background-color: #fff;
	border-radius: 16px;
	width: calc(100% / 4 - 11.25px);
	box-shadow: 0px 8px 24px rgba(228, 231, 242, 0.4);
`;

export const Image = styled.div`
	position: relative;
	padding-top: 56.25%;
	width: 100%;
	overflow: hidden;
	img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const Content = styled.div`
	padding: 15px;
	h1 {
		font-size: 20px;
		margin-bottom: 12px;
	}
`;
