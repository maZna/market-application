import React from "react";
import PropTypes from "prop-types";
import { ModalBox, Backdrop } from "../../styles/index";
import { ModalButton } from "./styles";

/**
 * The default modal component for the application
 */
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

Modal.propTypes = {
  /** Property to determine whether modal is visible or not*/
  open: PropTypes.bool,
  /** Header for modal*/
  header: PropTypes.string,
  /** Children passed to modal if any*/
  children: PropTypes.any,
  /** Function to toggle modal view*/
  toggle: PropTypes.func,
};

export default Modal;
