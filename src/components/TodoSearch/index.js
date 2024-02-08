import React, { useContext } from "react";
import "./TodoSearch.css";
import { TodoContext } from "../../Hooks/TodoContext";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
