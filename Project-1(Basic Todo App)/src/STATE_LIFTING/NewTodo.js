import React, { useState } from "react";

const NewTodo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (event) => {
    setTodo(event.target.value);

    //console.log(todo);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(todo);
    props.onTodo(todo);
  };

  return (
    <div>
      <h4>New Todo</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="todo" id="todo" onChange={handleChange} />
        <button> Add Todo </button>
      </form>
    </div>
  );
};

export default NewTodo;
