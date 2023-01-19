import React from "react";
import { AppUI } from "./AppUI";

const todos1 = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "Da na na na na na", completed: false },
];

let text = "Marcela";

function App() {
  const [valueSearch, setValueSearch] = React.useState("");
  const [todos, setTodos] = React.useState(todos1);

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const allTodos = todos.length;

  const onComplete = (text) => {
    const newArrayTodos = [...todos];
    const indexTodo = newArrayTodos.findIndex(todo => todo.text === text);
    newArrayTodos[indexTodo].completed = !newArrayTodos[indexTodo].completed;
    setTodos(newArrayTodos)
  };

  const onDelete = (text) => {
    const newArrayTodos = [...todos];
    const indexTodo = newArrayTodos.findIndex(todo => todo.text === text);
    newArrayTodos.splice(indexTodo, 1);
    setTodos(newArrayTodos)
  };

  let searchTodos = [];

  if (valueSearch.length >= 1) {
    const searchValueText = valueSearch.toLowerCase();
    searchTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      return todoText.includes(searchValueText);
    });
  } else {
    searchTodos = todos;
  }

  return (
    <AppUI
      text={text}
      completedTodos={completedTodos}
      allTodos={allTodos}
      valueSearch={valueSearch}
      setValueSearch={setValueSearch}
      searchTodos={searchTodos}
      onComplete={onComplete}
      onDelete={onDelete}
    />
  );
}

export default App;
