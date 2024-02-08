import React, { useContext } from "react";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodosLoading } from "../../components/TodosLoading";
import { TodosError } from "../../components/TodosError";
import { TodosEmpty } from "../../components/TodosEmpty";
import { TodoContext } from "../../Hooks/TodoContext";
import { TodoModal } from "../../components/Modal";
import { TodoForm } from "../../components/TodoForm";
import { CreateTodoButton } from "../../components/CreateTodoButton";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError />}
        {!loading && !error && searchedTodos.length === 0 && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      <TodoModal>
        <TodoForm />
      </TodoModal>
    </>
  );
}

export { AppUI };
