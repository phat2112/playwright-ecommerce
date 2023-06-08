import { ButtonHTMLAttributes, FC } from "react";
import { Button } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const index: FC<Props> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default index;
