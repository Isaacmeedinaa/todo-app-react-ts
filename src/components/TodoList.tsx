import React from "react";

import "./TodoList.css";

// type TodoListProps = {
//   todos: { id: string; text: string }[];
// }

interface TodoListProps {
  todos: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => props.onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
