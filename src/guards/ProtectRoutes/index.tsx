import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
// project import
import {UserInfo} from '@models';
import {useAuthContext} from '@hooks';
import RoleRoutes from '@guards/RoleRoutes';

interface Props extends PropsWithChildren {
	defineRoles?: UserInfo['role'][];
}
const ProtectRoutes = ({defineRoles = [], children}: Props) => {
	const {userInfo} = useAuthContext();

	if (!userInfo) {
		return <Navigate to="/login" replace />;
	}

	return (
		<RoleRoutes userInfo={userInfo} defineRoles={defineRoles}>
			{children}
		</RoleRoutes>
	);
};

export default ProtectRoutes;
