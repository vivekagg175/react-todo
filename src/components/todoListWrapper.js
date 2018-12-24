import React, { Component } from "react";
import NewTodoForm from "./newTodoForm";
import TodoList from "./todoList";

class TodoListWrapper extends Component {
  state = {
    message: "Todo App",
    newTodo: "",
    todos: [
      {
        title: "Learn React",
        done: false
      },
      {
        title: "Learn JSX",
        done: false
      }
    ]
  };

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  formSubmitted(event) {
    event.preventDefault();
    console.log(this.state.newTodo);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ],
      newTodo: ""
    });
  }

  toggleDone(event, index) {
    const todos = [...this.state.todos]; //copy of todos aray
    todos[index] = { ...todos[index], done: event.target.checked }; // copy of the todo
    console.log(todos);
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <h3>{this.state.message}</h3>
        <NewTodoForm
          formSubmitted={this.formSubmitted.bind(this)}
          newTodoChanged={this.newTodoChanged.bind(this)}
          newTodo={this.state.newTodo}
        />
        <button onClick={() => this.allDone()}>All Done</button>
        <TodoList
          todos={this.state.todos}
          toggleDone={this.toggleDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}
        />
      </div>
    );
  }
}

export default TodoListWrapper;
