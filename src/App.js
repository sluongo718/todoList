import React, { Component } from 'react'
import './App.css';

class App extends Component {

  state = {
    task: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h1>To Do List!</h1>
        <form>
            <input 
              type="text"
              placeholder="add todo" 
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <input type="submit"/>
        </form>
  
      </div>
    );
  }

}

export default App;
