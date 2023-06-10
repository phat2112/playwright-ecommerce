export interface UserInfo {
	username: string;
	password: string;
	role: 'admin' | 'user';
	token: string;
}
