import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { login } from "../../services/login";
import FormInput from "@component/Input/FormInput";
import Button from "@component/Button";
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

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<FormLogin>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const onLogin = async (formValues: FormLogin) => {
    console.log({ formValues });
    setIsLoading(true);

    try {
      const response = await login(formValues);

      console.log({ response });
    } catch (error) {
      console.log({ error });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onLogin)}>
        <Container>
          <Wrapper size={450}>
            <Title>Login</Title>

            <InputWrapper>
              <FormInput name="username" placeholder="Username" />
            </InputWrapper>
            <InputWrapper>
              <FormInput
                name="password"
                placeholder="Password"
                type="password"
              />
            </InputWrapper>

            <ButtonWrapper>
              <Button type="submit">Submit</Button>
            </ButtonWrapper>
          </Wrapper>
        </Container>
      </form>
    </FormProvider>
  );
};

export default Login;
