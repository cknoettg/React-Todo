import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import "./App.css";

//avoids problem with Date.now leading to non-unique id's
let randomizer = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
//enumerate the data
const todoData = [
  {
    task: 'Organize Garage',
    id: randomizer(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: randomizer(),
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

  //STRETCH: Add function to make JSON.Stringify
  // persist state later
  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  //STRETCH
  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  //STRETCH: call with componentDidMount
  componentDidMount() {
    this.hydrateStateWithLocalStorage();
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  clearForm = e => {
    e.preventDefault();
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
    localStorage.setItem("todos", JSON.stringify([...this.state.todos]));
  };

  //add todo function
  addTodo = todoName => {
    const newTodo = {
      task: todoName,
      id: randomizer(),
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
    localStorage.setItem("todos", JSON.stringify(...this.state.todos));
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
      <div className="App">
        <h1>Todo List</h1>
        <div className="top">
        <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} />
        </div>
        <div className="bottom">
        <TodoForm addTodo={this.addTodo} />
        <button onClick={this.clearForm}>Clear Completed</button>
        </div>
      </div>
    );
  }
}

export default App;
