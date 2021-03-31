import React from "react";

function ToDoItem(props) {
  return (
    <div>
      <li style={{ textDecoration: "line-through" }}>{props.text}</li>;
    </div>
  );
}

export default ToDoItem;
