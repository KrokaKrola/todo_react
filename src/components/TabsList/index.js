import React from 'react';
import './TabsList.css';

const TabsList = () => {
  return (
    <div className="TabsList">
      <ul>
        <li>All todo's</li>
        <li>Done</li>
        <li>Active</li>
      </ul>
    </div>
  );
};

export default TabsList;