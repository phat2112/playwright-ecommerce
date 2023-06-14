import {styled} from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	max-width: 600px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 16px;
	input ~ * {
		margin-top: 16px;
	}
`;
