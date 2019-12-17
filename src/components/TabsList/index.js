import React from "react";
import "./TabsList.css";

const TabsList = ({ tabs, handleTabChange }) => {
  return (
    <div className="TabsList">
      <ul>
        {tabs.map(tab => {
          return (
            <li
              key={tab.id}
              className={tab.active ? "active" : ""}
              onClick={() => {
                handleTabChange(prevState => {
                  return prevState.map(item => {
                    return {
                      ...item,
                      active: item.id === tab.id ? true : false
                    };
                  });
                });
              }}
            >
              {tab.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabsList;
