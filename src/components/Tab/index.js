import React from 'react';
import "./Tab.css";
import Button from "./../Button";

const Tab = () => {
  return (
    <div className="Tab">
      <ul>
        <li className="active"><span></span>Task 1</li>
        <li><span></span>Task 2</li>
        <li><span></span>Task 3</li>
      </ul>
      <Button >
        add task
      </Button>
    </div>
  );
};

export default Tab;