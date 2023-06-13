import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: none;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
    inset -2px -5px 10px rgba(255, 255, 255, 0.4),
    15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
  background: #ff0f5b;
  position: relative;
  transition: 0.5s;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &::after {
    content: "";
    width: 80%;
    height: 5px;
    border-radius: 5px;
    background-color: #fff;
    opacity: 0.7;
    position: absolute;
    top: 5px;
    left: 10%;
  }

  .loading-spinner {
    position: absolute;
    right: 6px;
    top: 10px;
  }
`;
