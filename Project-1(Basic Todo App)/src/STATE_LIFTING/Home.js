import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const dummyTodos = ["Todos1", "Todos2", "Todos3"];

const Home = () => {
  const [todos, setTodos] = useState(dummyTodos);

  const handleNewTodo = (newTodo) => {
    // console.log(newTodo);
    setTodos([...todos, newTodo]);
  };
  return (
    <div>
      <NewTodo onTodo={handleNewTodo} />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
