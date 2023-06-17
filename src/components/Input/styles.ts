import styled, { css } from "styled-components";
// project import
import { VariantInput } from "@components/Input";

export const Input = styled.input<{ variant?: VariantInput }>`
  position: relative;
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 16px;
  ${(props) =>
    props.variant === "shadow" &&
    css`
      border: none;
      border-radius: 25px;
      box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.1),
        inset -2px -5px 10px rgba(255, 255, 255, 1),
        15px 15px 10px rgba(0, 0, 0, 0.05), 15px 10px 15px rgba(0, 0, 0, 0.025);
      background: transparent;
      padding-left: 20px;
    `}
  ${(props) =>
    props.variant === "normal" &&
    css`
      border-radius: 8px;
      border: 1px solid #e4e7f2;
      padding: 8px 16px;
    `}
`;
