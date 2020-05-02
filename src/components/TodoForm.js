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

  //clear function - button is in TodoForm
  // clearForm = e => {
  //   e.preventDefault();
  //   this.setState({
  //     todos: this.state.todos.filter(todo => !todo.completed)
  //   });
  // };
  
  render() {
    return (
      <div>
      <form onSubmit={this.submitForm}>
        <input 
          type="text"
          value={this.todo}
          name="todo"
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
      </div>
    )};
};

export default TodoForm;