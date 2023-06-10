import UserLoggedIn from '@mock/Login.json';
import {randomIntFromRange} from '@utils/helpers';
import {UserInfo} from '@models';

export type LoginRequest = {
	username: string;
	password: string;
};

export const login = (
	request: LoginRequest
): Promise<{
	status: number;
	data: any;
}> => {
	const pendingTime = randomIntFromRange(1, 3) * 1000; // delay 1 - 3 seconds
	return new Promise((res, rej) => {
		setTimeout(() => {
			const users = UserLoggedIn.user as UserInfo[];

			const userFound = users.find((user) => {
				return (
					user.username === request.username &&
					user.password === request.password
				);
			});

			if (userFound) {
				res({
					status: 200,
					data: userFound,
				});
			}

			rej({
				status: 400,
				data: {
					message: 'User is not existed',
				},
			});
		}, pendingTime);
	});
};
