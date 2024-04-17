import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CreateTodo } from "./components/CreateTodo.jsx";
import { Todos } from "./components/Todos.jsx";
import "./App.css";
import { json } from "express";

function App() {
  const [todos, setTodos] = useState([]);
  fetch("http://localhost:1000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json.todos);
  });
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={[{}]}></Todos>
    </div>
  );
}

export default App;
