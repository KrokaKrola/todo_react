import React, { useState, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import TabsList from "./components/TabsList";
import Tab from "./components/Tab";
import AddTask from "./components/AddTask";
import { uniqueId } from "./components/vendor";
import Button from "./components/Button";

// const state = {
//   todos: [
//     {
//       id: "unique_id",
//       name: "todo_name",
//       done: true
//     },
//     {
//       id: "unique_id",
//       name: "todo_name",
//       done: true
//     }
//   ],
//   isLoading: true
// };

const App = () => {
  const todoInput = useRef(null);
  const [todosList, setTodosList] = useState([
    {
      id: 324432324,
      name: "todo_name",
      done: false
    },
    {
      id: 6323223423,
      name: "todo_name",
      done: true
    }
  ]);

  const [todosTabs, setTodosActive] = useState([
    {
      id: uniqueId(),
      name: "All",
      active: true
    },
    {
      id: uniqueId(),
      name: "Active",
      active: false
    },
    {
      id: uniqueId(),
      name: "Done",
      active: false
    }
  ]);

  const getActiveTab = () => {
    return todosTabs.find(item => item.active === true).name;
  };

  const addTodo = e => {
    e.preventDefault();
    setTodosList(prevState => {
      const newState = [
        {
          id: uniqueId(),
          name: todoInput.current.value,
          done: false
        },
        ...prevState
      ];
      todoInput.current.value = "";
      return newState;
    });
  };

  const handleTodoToggleDone = id => {
    const todoIndex = todosList.findIndex(item => item.id === id);
    setTodosList(prevState => {
      const newState = [...prevState];
      newState[todoIndex].done = !newState[todoIndex].done;
      return newState;
    });
  };

  const handleTodoAllComplete = () => {
    setTodosList(prevState => {
      return [...prevState].map(todo => {
        return {
          ...todo,
          done: true
        };
      });
    });
  };

  const handleRemoveComplete = () => {
    setTodosList(prevState => {
      return [...prevState].filter(item => {
        return item.done !== true;
      });
    });
  };

  const itemsLeftCount = () => {
    return todosList.reduce((sum, todo) => {
      return todo.done ? sum : sum + 1;
    }, 0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>Todo app</span>
      </header>
      <main>
        <div className="Tabs">
          <AddTask
            todoInput={todoInput}
            submitHandler={addTodo}
            handleAllDone={handleTodoAllComplete}
          />
          <TabsList tabs={todosTabs} handleTabChange={setTodosActive} />
          <Tab
            todosList={todosList}
            handleClick={handleTodoToggleDone}
            activeTab={getActiveTab()}
          />
          <div className="Tabs__bottom">
            <Button
              onClick={() => {
                handleRemoveComplete();
              }}
              className="RemoveDone"
            >
              Remove Done Todo's
            </Button>
            <span className="App__counter">Todo's left {itemsLeftCount()}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
