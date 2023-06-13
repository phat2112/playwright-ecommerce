import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { motion, useAnimate } from "framer-motion";

import { login } from "@services/Login";
import FormInput from "@components/Input/FormInput";
import Button from "@components/Button";
import { UserInfo } from "@models";
import {
  Container,
  Wrapper,
  InputWrapper,
  ButtonWrapper,
  Title,
} from "./styles";

interface FormLogin {
  username: string;
  password: string;
}

const defaultValues: FormLogin = {
  username: "",
  password: "",
};

const schema = yup.object<FormLogin>({
  username: yup
    .string()
    .required("field is required")
    .email("username is invalid"),
  password: yup.string().required("field is required"),
});

type Props = {
  getUserInfo: Dispatch<SetStateAction<UserInfo | null>>;
};

const Login: React.FC<Props> = ({ getUserInfo }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [scope, animate] = useAnimate();

  const methods = useForm<FormLogin>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    animate(scope.current, { width: isLoading ? "270px" : "200px" });
  }, [animate, isLoading, scope]);

  const onLogin = async (formValues: FormLogin) => {
    setIsLoading(true);
    try {
      const response = await login(formValues);

      if (response.status !== 200) {
        throw new Error(response?.data?.message || "Internal Server Error");
      }

      getUserInfo(response.data);
      toast.success("User signed in successfully");
      setIsLoading(false);

      navigate("/", { replace: true });
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
      setIsLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onLogin)}>
        <Container>
          <Wrapper
            size={450}
            as={motion.div}
            initial={{ y: "100%" }}
            animate={{ y: "calc(50% - (450px / 2))" }}
          >
            <Title>Login</Title>

            <InputWrapper>
              <FormInput
                name="username"
                placeholder="Username"
                data-testId="username"
              />
            </InputWrapper>
            <InputWrapper>
              <FormInput
                name="password"
                placeholder="Password"
                type="password"
                data-testId="password"
              />
            </InputWrapper>

            <ButtonWrapper as={motion.div} ref={scope}>
              <Button
                type="submit"
                isLoading={isLoading}
                data-testId="login-button"
              >
                Submit
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </form>
    </FormProvider>
  );
};

export default Login;
