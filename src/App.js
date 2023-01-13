import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// import './App.css';

const todos1 = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Da na na na na na', completed: false },
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Da na na na na na', completed: false }      
];

let name = 'Marcela';

function App() {
  return (
    <React.Fragment>
    <TodoCounter text = {name} />
    <TodoSearch />

    <TodoList>
      {todos1.map(todo => (
        <TodoItem key={todo.text} text = {todo.text} completed = {todo.completed}/>
      ))}
    </TodoList>

    <CreateTodoButton />    
    </React.Fragment>
  );
}

export default App;
