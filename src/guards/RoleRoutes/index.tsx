import {PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';
// library
import {toast} from 'react-toastify';
// project import
import {UserInfo} from '@models';

interface Props extends PropsWithChildren {
	userInfo: UserInfo;
	defineRoles?: UserInfo['role'][];
}
const RoleRoutes = ({userInfo, defineRoles = [], children}: Props) => {
	if (defineRoles.length >= 1 && !defineRoles.includes(userInfo.role)) {
		toast("You don't have permission");
		return <Navigate to="/" replace />;
	}

	return <>{children}</>;
};

export default RoleRoutes;
