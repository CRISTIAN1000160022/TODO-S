import React from "react";
import { TiPlus } from "react-icons/ti";
import "./CreateTodoButton.css";

function CreateTodoButton({ setOpenModal }) {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <TiPlus />
    </button>
  );
}

export { CreateTodoButton };
