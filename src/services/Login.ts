import UserLoggedIn from "@mock/Login.json";
import { randomIntFromRange } from "@utils/helpers";

export type LoginRequest = {
  username: string;
  password: string;
};

export const login = (request: LoginRequest) => {
  const pendingTime = randomIntFromRange(1, 3) * 1000; // delay 1 - 3 seconds
  return new Promise((res, rej) => {
    setTimeout(() => {
      const users = UserLoggedIn.user;

      const userFound = users.find((user) => {
        return (
          user.username === request.username &&
          user.password === request.password
        );
      });

      if (userFound) {
        res({
          status: 200,
          data: {
            username: userFound.username,
            role: userFound.role,
            token: userFound.token,
          },
        });
      }

      rej({
        status: 400,
        data: {
          message: "User is not existed",
        },
      });
    }, pendingTime);
  });
};
