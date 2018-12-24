import React from "react";
const NewTodoForm = props => {
  return (
    <form onSubmit={event => props.formSubmitted(event)}>
      <label htmlFor="newTodo">New Todo : </label>
      <input
        onChange={event => props.newTodoChanged(event)}
        id="newTodo"
        placeholder="type text"
        value={props.newTodo}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
