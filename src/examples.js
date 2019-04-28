import React, { Component } from 'react';
import axios from "axios";

class App extends Component {
  constructor() {
      super()
      this.state = {
        todos: []
      }
    }
componentDidMount(){
    axios.get("https://api.vschool.io/alan/todo/").then((response)=>{
        console.log(response.data)
        this.setState({todos.response.data})
    })
    }

render() {
    const mappedTodos = this.state.todos.map(todo=>{
        return <div key="todo._id">{todo.title}</div>
    })

  return (
    <div>


    </div>
  );
}
}

export default App;