import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  text,
  completedTodos,
  allTodos,
  valueSearch,
  setValueSearch,
  searchTodos,
  onComplete,
  onDelete,
}) {
  return (
    <React.Fragment>
      <TodoCounter
        text={text}
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
            onComplete={onComplete}
            onDelete={onDelete}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI }