import { FC, InputHTMLAttributes } from "react";
import cn from "classnames";

import { Input } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement>;

const index: FC<Props> = ({ placeholder, name, ...props }) => {
  return <Input type="text" placeholder={placeholder} name={name} {...props} />;
};

export default index;
