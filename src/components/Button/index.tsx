import { ButtonHTMLAttributes, FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "./styles";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

const index: FC<Props> = ({ children, isLoading, ...props }) => {
  return (
    <Button {...props}>
      {children}
      {isLoading && (
        <ClipLoader
          color={"#ffffff"}
          loading
          className="loading-spinner"
          // cssOverride={override}
          size={16}
        />
      )}
    </Button>
  );
};

export default index;
