import React from "react";
import { TodoIcon } from ".";

const CompleteIcon = ({ completed, onComplete }) => (
  <TodoIcon
    type="complete"
    className={completed ? "Icon Icon-check" : "Icon"}
    onClick={onComplete}
  />
);

export { CompleteIcon };
