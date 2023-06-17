import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eff0f4;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Wrapper = styled.div<{ size: number }>`
  width: ${(props) => props?.size || 0}px;
  height: ${(props) => props?.size || 0}px;
  position: relative;
  border-radius: 71% 29% 70% 30% / 30% 47% 53% 70%;
  transition: 0.5s;
  box-shadow: inset 20px 20px 20px rgba(255, 255, 255, 0.9),
    25px 35px 20px rgba(0, 0, 0, 0.05), 25px 30px 30px rgba(0, 0, 0, 0.05),
    inset -20px -20px 25px rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: #fff;
    top: 15%;
    left: 25%;
    border-radius: 50%;
    opacity: 0.9;
  }

  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: #fff;
    top: 25%;
    left: 30%;
    border-radius: 50%;
    opacity: 0.9;
  }

  &:hover {
    border-radius: 41% 59% 34% 66% / 63% 33% 67% 37%;
  }
`;

export const InputWrapper = styled.div`
  width: 270px;
`;

export const ButtonWrapper = styled.div`
  width: 200px;
`;
