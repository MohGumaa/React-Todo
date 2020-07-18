import React, { useState } from "react";

function AddTodo(props) {
  const [title, setTitle] = useState("");

  function onChange(e) {
    const newValue = e.target.value;
    setTitle(newValue);
  }

  function onSubmit(e) {
    props.addTodo(title);
    setTitle("");
    e.preventDefault();
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        placeholder="Add Todo..."
        style={{ flex: "10", padding: "5px" }}
        value={title}
        onChange={onChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: "1" }}
      />
    </form>
  );
}

export default AddTodo;
