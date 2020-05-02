import React from 'react';
import ReactDOM from 'react-dom';
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
  //submit function - offloaded to TodoForm

  //clear function - button is in TodoForm
  clearForm = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  };

  //add todo function
  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  //add toggle function
  toggleTodo = id => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        } else {
          return todo;
        }
      })
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <div>
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        </div>
        <div>
        <TodoForm addTodo={this.addTodo} toggleTodo={this.toggleTodo} />
        <button onClick={this.clearForm}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
