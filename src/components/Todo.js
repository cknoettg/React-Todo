import React from 'react';

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