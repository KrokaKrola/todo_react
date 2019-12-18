import React from "react";
import "./Tab.css";
import Button from "./../Button";
import remove from "./../../wrong.svg";

const TODOS_FILTER = {
  All: todos => todos,
  Active: todos => todos.filter(item => item.done === false),
  Done: todos => todos.filter(item => item.done === true)
};

const Tab = ({ todosList, handleClick, activeTab, handleDelete }) => {
  return (
    <div className="Tab">
      <ul>
        {TODOS_FILTER[activeTab](todosList).map(item => {
          return (
            <li key={item.id} className={item.done ? "active" : ""}>
              <span onClick={() => handleClick(item.id)}></span>
              {item.name}
              <Button
                className="RemoveTodo"
                title="Delete todo"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                <img src={remove} alt="remove" />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
