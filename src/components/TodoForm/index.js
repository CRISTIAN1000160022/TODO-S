import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./TodoForm.css";
import { TodoContext } from "../../Hooks/TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = useState("");

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };
  const onCancel = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  return (
    <Form className="text-center" onSubmit={onSubmit}>
      <Form.Group className="mb-1">
        <Form.Label className="label">Ingresa tu tarea</Form.Label>
        <Form.Control
          className="textarea"
          as="textarea"
          placeholder="Aprender..."
          value={newTodoValue}
          onChange={onChange}
        />
      </Form.Group>
      <Form.Group className="mb-1">
        <div className="row">
          <div className="col col-sm-6">
            <Button className="mx-1" variant="secondary" onClick={onCancel}>
              Cancelar
            </Button>
          </div>
          <div className="col col-sm-6">
            <Button className="mx-1" type="submit">
              Agregar
            </Button>
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}

export { TodoForm };
