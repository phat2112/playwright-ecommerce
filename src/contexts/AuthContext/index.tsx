import {PropsWithChildren, createContext, useState} from 'react';
import {UserInfo} from '@models';

export interface AuthContextProps {
	userInfo: UserInfo | null;
	setUserInfo: (userInfo: UserInfo | null) => void;
}

type AuthProviderProps = PropsWithChildren;

export const AuthContext = createContext<AuthContextProps>({
	userInfo: null,
	setUserInfo: () => null,
});

const AuthProvider = ({children}: AuthProviderProps) => {
	const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

	const valueProvider = {
		userInfo,
		setUserInfo,
	};

	return (
		<AuthContext.Provider value={valueProvider}>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthProvider;
