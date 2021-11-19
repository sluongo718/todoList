import React, { Component } from 'react'
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <h1>To Do List!</h1>
        <form>
            <input 
              type="text"
              placeholder="add todo" 
              
            />
            <input type="submit"/>
        </form>
  
      </div>
    );
  }

}

export default App;
