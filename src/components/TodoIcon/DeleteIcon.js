import React from "react";
import { TodoIcon } from ".";

function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon type="delete" className="Icon Icon-delete" onClick={onDelete} />
  );
}

export { DeleteIcon };
