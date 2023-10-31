import ReactDOM from "react-dom";
import { ReactNode } from "react";
import { Container } from "@mui/material";

const Modal = ({ children }: { children?: ReactNode }) => {
  return ReactDOM.createPortal(
    <>
      <Container maxWidth="lg">{children}</Container>
    </>,
    document.getElementById("overlay-root")!
  );
};

export default Modal;
