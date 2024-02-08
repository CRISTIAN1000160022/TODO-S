import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  //Logica para obtener el valor actual del local storage, si no existe se asigna el valor inicial
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, [itemName, initialValue]);
  //Funcion para guardar el valor en el local storage y en el estado
  const saveItem = (newItems) => {
    const stringifiedItem = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItems);
  };
  //Retornamos el valor y la funcion para guardar el valor
  return { item, saveItem, loading, error };
}

export { useLocalStorage };

//Manejo de local storage
// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar el curso de intro a React", completed: false },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "Usar estados derivados", completed: false },
// ];

// Asignamos el valor inicial al local storage
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
//Eliminamos el valor del local storage
// localStorage.removeItem("TODOS_V1");