import {NavLink} from 'react-router-dom';
// project import
import {useAuthContext} from '@hooks';
import {Container, CustomHeaderItem} from './styles';

const Header = () => {
	const {userInfo, setUserInfo} = useAuthContext();
	const isAdmin = userInfo?.role === 'admin';

	const onLogout = () => {
		setUserInfo(null);
	};

	return (
		<Container>
			<NavLink to="/">Home</NavLink>
			{isAdmin && (
				<NavLink to="/admin" data-testId="anchor-admin">
					Admin
				</NavLink>
			)}
			{userInfo && (
				<CustomHeaderItem onClick={onLogout}>Logout</CustomHeaderItem>
			)}
		</Container>
	);
};

export default Header;
