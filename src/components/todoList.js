import React from "react";
import ListItem from "./listItem";
const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => {
        return (
          <ListItem
            key={index}
            index={index}
            todo={todo}
            toggleDone={props.toggleDone}
            removeTodo={props.removeTodo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
