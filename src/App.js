import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tabs from "./components/Tabs";

// const state = {
//   todos: [
//     {
//       id: 'unique_id',
//       name: 'todo_name',
//       done: true
//     }
//   ],
//   isLoading: true
// }

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Todo app</span>
      </header>
      <main>
        <Tabs />
      </main>
    </div>
  );
};

export default App;
