import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { Modal } from "react-bootstrap";
import { TodoContext } from "../../Hooks/TodoContext";

function TodoModal({ children }) {
  const { openModal, setOpenModal } = useContext(TodoContext);

  const hadleChangeStateModal = () => {
    setOpenModal(!openModal);
  };

  return createPortal(
    <Modal show={openModal} onHide={hadleChangeStateModal} centered>
      <Modal.Body>{children}</Modal.Body>
    </Modal>,
    document.body
  );
}

export { TodoModal };
