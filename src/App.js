import React, { Component } from 'react'
import './App.css';
import Todo from './componets/todoForm'
import TodoList from './componets/todosList';

class App extends Component {

  render(){
    return (
      <div>
        <Todo/>
        <TodoList/>
      </div>
    )
  }
}

export default App;
