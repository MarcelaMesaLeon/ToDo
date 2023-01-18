import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// import './App.css';

const todos1 = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "Da na na na na na", completed: false },
];

let name = "Marcela";

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
    <React.Fragment>
      <TodoCounter
        text={name}
        completedTodos={completedTodos}
        allTodos={allTodos}
      />

      <TodoSearch valueSearch={valueSearch} setValueSearch={setValueSearch} />

      <TodoList>
        {searchTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete = {onComplete}
            onDelete = {onDelete}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
