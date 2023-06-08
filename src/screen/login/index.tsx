import Input from "../../components/input";
import Button from "../../components/button";
import {
  Container,
  Wrapper,
  InputWrapper,
  ButtonWrapper,
  Title,
} from "./styles";

const index = () => {
  return (
    <Container>
      <Wrapper size={450}>
        <Title>Login</Title>

        <InputWrapper>
          <Input placeholder="Username" />
        </InputWrapper>
        <InputWrapper>
          <Input placeholder="Password" />
        </InputWrapper>

        <ButtonWrapper>
          <Button type="submit">Submit</Button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
};

export default index;
