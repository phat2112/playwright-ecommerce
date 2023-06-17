import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
	background-color: #f7f9fd;
	min-height: 100vh;
`;

export const MainLayoutChild = styled.div`
	padding: 15px;
	height: calc(100vh - 50px);
	overflow: auto;
	&::-webkit-scrollbar {
		display: none;
	}
`;
