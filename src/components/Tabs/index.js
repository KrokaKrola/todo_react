import React from 'react';
import TabsList from "./../TabsList";
import Tab from "./../Tab";
import "./Tabs.css";

const Tabs = () => {
  return (
    <div className="Tabs">
      <TabsList />
      <Tab />
    </div>
  );
};

export default Tabs;