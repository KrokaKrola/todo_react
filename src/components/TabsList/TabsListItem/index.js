import React from "react";

const TabsListItem = ({ name, ...props }) => {
  return <li {...props}>{name}</li>;
};

export default TabsListItem;
