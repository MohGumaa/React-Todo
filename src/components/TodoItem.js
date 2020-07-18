import React from "react";

function TodoItem(props) {
  const { id, title } = props.todo;

  function getStyle() {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none",
    };
  }

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={() => props.markComplete(id)} />{" "}
        {title}
        <button style={btnStyle} onClick={() => props.delTodo(id)}>
          x
        </button>
      </p>
    </div>
  );
}

export default TodoItem;

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};
