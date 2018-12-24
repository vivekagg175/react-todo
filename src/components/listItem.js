import React from "react";

const ListItem = props => {
  const { todo } = props;
  return (
    <li>
      <input
        onChange={event => props.toggleDone(event, props.index)}
        type="checkbox"
        checked={todo.done}
      />
      <span
        style={{
          textDecoration: todo.done ? "line-through" : "inherit"
        }}
      >
        {todo.title}
      </span>
      <button onClick={() => props.removeTodo(props.index)}>Remove</button>
    </li>
  );
};

export default ListItem;
