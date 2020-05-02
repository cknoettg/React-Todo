import React from 'react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    };
  }

  //change handler
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //Add todo button function
  submitForm = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
  };
  
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input 
          type="text"
          value={this.todo}
          name="todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.submitForm}>Add Todo</button>
        <button onClick={this.clearForm}>Clear Completed</button>
      </form>
    )};
};

export default TodoForm;