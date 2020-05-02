import React from 'react';
import "./Todo.css";

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? {textDecoration: 'line-through'}: null}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {/* Display task property */}
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;