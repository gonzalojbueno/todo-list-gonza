import React, { Component } from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state  = {
    todos:[
    {id:1, content : 'Make the bed'},
    //{id:2, content : 'Jugar playstation'}
    ]
  }
  deleteTodo = (id) => {

    const todos = this.state.todos.filter(todo => {
      return todo.id != id
    })

    this.setState({
      todos
    })
  }

  addTodo = (todo) =>{

    todo.id = Math.random()
    let todos  = [...this.state.todos, todo]//creating a new array which we add element to
    this.setState({
      todos
    })

  }
  render(){
  return (
    <div>
      <h1 className="center blue-text"> todos </h1>
      <div className="todo-app container">

       <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />

        <i className="fas fa-times">Counter</i>

      </div>
    </div>
  )
}
}

export default App;


//our root component is where we store the state of the component