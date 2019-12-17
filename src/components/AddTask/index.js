import React from "react";
import Button from "./../Button";
import "./AddTask.css";

const AddTask = ({ todoInput, submitHandler, handleAllDone }) => {
  return (
    <form
      className="AddTask"
      onSubmit={e => {
        submitHandler(e);
      }}
    >
      <Button
        type="button"
        title="mark all as done"
        className="AddTask__complete_all"
        onClick={() => {
          handleAllDone();
        }}
      >
        <span></span>
      </Button>
      <input type="text" placeholder="Input a todo...." ref={todoInput} />
    </form>
  );
};

export default AddTask;
