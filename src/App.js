import React, { useState, useRef, useEffect } from "react";
import logo from "./logo.svg";
import Loading from "./loading.svg";
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
  const [todosList, setTodosList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getStorageTodos() {
    let result = await JSON.parse(localStorage.getItem("todos"));
    setIsLoading(false);
    setTodosList(result);
  }

  async function setNewStorageTodo(state) {
    let newStorageState = await JSON.stringify(state);
    localStorage.setItem('todos', newStorageState);
  }

  useEffect(() => {
    getStorageTodos();
  }, []);

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

  const addTodo = async e => {
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
      setNewStorageTodo(newState);
      return newState;
    });
  };

  const handleTodoToggleDone = id => {
    const todoIndex = todosList.findIndex(item => item.id === id);
    setTodosList(prevState => {
      const newState = [...prevState];
      newState[todoIndex].done = !newState[todoIndex].done;
      setNewStorageTodo(newState);
      return newState;
    });
  };

  const handleTodoAllComplete = () => {
    setTodosList(prevState => {
      const newState = [...prevState].map(todo => {
        return {
          ...todo,
          done: true
        };
      });
      setNewStorageTodo(newState);
      return newState
    });
  };

  const handleRemoveComplete = () => {
    setTodosList(prevState => {
      const newState = [...prevState].filter(item => {
        return item.done !== true;
      });
      setNewStorageTodo(newState);
      return newState
    });
  };

  const itemsLeftCount = () => {
    return todosList.reduce((sum, todo) => {
      return todo.done ? sum : sum + 1;
    }, 0);
  };

  const handleTodoDelete = (id) => {
    setTodosList(prevState => {
      const newState = [...prevState].filter(item => {
        return item.id !== id;
      });
      setNewStorageTodo(newState);
      return newState
    });
  } 

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
          {isLoading ? (
            <img src={Loading} className="Loading" alt="Loading..." />
          ) : (
            <Tab
              todosList={todosList}
              handleClick={handleTodoToggleDone}
              activeTab={getActiveTab()}
              handleDelete={handleTodoDelete}
            />
          )}

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
