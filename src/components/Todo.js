import React from 'react';

const Todo = props => {
  return (
    <div
    className={`todo${props.todo.purchased ? ' purchased' : ''}`}
      onClick={() => props.toggleTodo(props.todo.id)}
    >
      {/* Display task property */}
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;