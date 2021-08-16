import React from "react";
import { ModalBox, Backdrop, PageButton } from "../../styles/index";
import styled from "styled-components";

const ModalButton = styled(PageButton)`
  background-color: ${(props) => props.theme.main};
  color: white;
  &:hover {
    background-color: ${(props) => props.theme.main};
  }
`;

function Modal({ open, header, children, toggle }) {
  if (open)
    return (
      <>
        <Backdrop></Backdrop>
        <ModalBox>
          <header>{header}</header>
          <hr />
          <main>{children}</main>
          <footer>
            <ModalButton onClick={toggle}>Close</ModalButton>
          </footer>
        </ModalBox>
      </>
    );
  return null;
}

export default Modal;
