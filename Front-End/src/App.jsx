import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { CreateTodo } from "./components/CreateTodo.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos></Todos>
    </div>
  );
}

export default App;
