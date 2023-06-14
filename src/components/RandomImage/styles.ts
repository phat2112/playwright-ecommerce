import styled from 'styled-components';

export const ImageWrap = styled.div`
	position: relative;
	padding-top: 56.25%;
	width: 100%;
	overflow: hidden;
	background-color: #f7f9fd;
	border-radius: inherit;
`;

export const Image = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: contain;
	cursor: pointer;
`;
