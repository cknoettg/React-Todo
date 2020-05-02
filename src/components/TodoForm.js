import React from 'react';
const TodoForm = props => {
  return (
    <form>
      <input  />
      <button onClick={props.submitForm}>Add Todo</button>
      <button onClick={props.clearForm}>Clear Completed</button>
    </form>
  );
};

export default TodoForm;