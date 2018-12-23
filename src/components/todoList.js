import React, { Component } from "react";

class TodoList extends Component {
  state = {};

  addItem = () => {
    alert();
  };
  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="type text" />
            <button type="submit">Add </button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
