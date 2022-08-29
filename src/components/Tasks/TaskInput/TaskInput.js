import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";

const TaskInput = (props) => {
  const [inputText, setInputText] = useState("");

  const taskInputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0){
      return;
    }
    props.onAddTask(inputText);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>Задачи</label>
        <input type="text" onChange={taskInputChangeHandler} />
      </div>
      <Button disabled={inputText.trim().length === 0} type="submit">Добавить Задачу</Button>
    </form>
  );
};

export default TaskInput;
