import React, { useContext } from "react";
import { TodoCounter } from "../../components/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch";
import { TodoList } from "../../components/TodoList";
import { TodoItem } from "../../components/TodoItem";
import { TodosLoading } from "../../components/TodosLoading";
import { TodosError } from "../../components/TodosError";
import { TodosEmpty } from "../../components/TodosEmpty";
import { TodosCompleted } from "../../components/TodosCompleted";
import { TodoContext } from "../../Hooks/TodoContext";
import { TodoModal } from "../../components/Modal";
import { TodoForm } from "../../components/TodoForm";
import { CreateTodoButton } from "../../components/CreateTodoButton";

function AppUI() {
  const {
    error,
    loading,
    existedTodos,
    completedTodos,
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
        {!loading && !error && !existedTodos && <TodosEmpty />}
        {!loading && !error && completedTodos > 0 && existedTodos === completedTodos && <TodosCompleted />}
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
