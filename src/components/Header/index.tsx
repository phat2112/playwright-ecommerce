// project import
import {Container, CustomLink} from '@components/Header/styles';

const Header = () => {
	return (
		<Container>
			<CustomLink to="/" className={({isActive}) => (isActive ? 'active' : '')}>
				Home
			</CustomLink>
			<CustomLink
				to="/admin"
				className={({isActive}) => (isActive ? 'active' : '')}
			>
				Admin
			</CustomLink>
		</Container>
	);
};

export default Header;
