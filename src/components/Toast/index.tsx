import { FC } from "react";
import { ToastContainer, ToastPosition } from "react-toastify";
import styled from "styled-components";
import cn from "classnames";

import "react-toastify/dist/ReactToastify.css";

interface Props {
  position?: ToastPosition;
}

const ToastWrapper = styled(ToastContainer)`
  .toast-container {
    max-width: 400px;
    background: transparent;
  }
`;

const ToastProvider: FC<Props> = ({ position = "top-right" }) => {
  return (
    <ToastWrapper position={position} toastClassName={cn("toast-container")} />
  );
};

export default ToastProvider;
