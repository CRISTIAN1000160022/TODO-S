import React, { useContext } from "react";
import { TodoContext } from "../../Hooks/TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
  const { totalTodos: total, completedTodos: completed } =
    useContext(TodoContext);
  return (
    <h2 className="TodoCounter">
      Has completado {completed} de {total} TO DOs
    </h2>
  );
}

export { TodoCounter };
