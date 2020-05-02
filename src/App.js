import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//enumerate the data
const todoData = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  //create the constructor
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }

  //functions: display list, input field, submit button, clear button
  //display list - that is in the JSX render
  //input field - in TodoList file

  //submit function - button is in TodoForm
  submitForm() {
    return console.log("Test")
  }

  //clear function - button is in TodoForm
  clearForm() {
    return console.log("Test")
  }

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoList todos={this.state.todos} />
        <TodoForm  />
        {/* Moved to Todo Form 
        <button>Add Todo</button>
        <button>Clear Completed</button>
        */}
      </div>
    );
  }
}

export default App;
