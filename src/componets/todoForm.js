import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask} from '../actions/taskActions'

class Todo extends Component {
    state = {
        name: ""
      }
    
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTask(this.state)
        this.setState({name: ""})
      }
    
      render(){
        return (
          <div className="App">
            <h1>To Do List!</h1>
            <form onSubmit={this.handleSubmit} > 
                <input 
                  type="text"
                  placeholder="add todo" 
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input type="submit"/>
            </form>    
          </div>
        );
      }
}

export default connect(null, {addTask})(Todo) 
