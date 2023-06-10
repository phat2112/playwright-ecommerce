import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
// project import
import {UserInfo} from '@models';
import RoleRoutes from '@guards/RoleRoutes';

interface Props extends PropsWithChildren {
	userInfo: UserInfo | null;
	defineRoles?: UserInfo['role'][];
}
const ProtectRoutes = ({userInfo, defineRoles = [], children}: Props) => {
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
