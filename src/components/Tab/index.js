import React from "react";
import "./Tab.css";

const TODOS_FILTER = {
  All: todos => todos,
  Active: todos => todos.filter(item => item.done === false),
  Done: todos => todos.filter(item => item.done === true)
}

const Tab = ({ todosList, handleClick, activeTab }) => {
  return (
    <div className="Tab">
      <ul>
        {TODOS_FILTER[activeTab](todosList).map(item => {
          return (
            <li
              onClick={() => handleClick(item.id)}
              key={item.id}
              className={item.done ? "active" : ""}
            >
              <span></span>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tab;
