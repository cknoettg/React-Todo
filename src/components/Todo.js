import React from 'react';

const Todo = props => {
  return (
    <div
      onClick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;