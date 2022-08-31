import React, {useState} from "react";

import Button from "../../UI/Button/Button";
import "./TaskInput.css";
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.invalid ? 'red' : 'black'};
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${props => props.invalid ? 'red' : '#ccc'};
  background-color:  ${props => props.invalid ? '#f2d9d9' : 'transparent'};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #c8e1e4;
  border-color: #00358b;
}
`

const TaskInput = (props) => {
    const [inputText, setInputText] = useState("");
    const [inputValid, setInputValid] = useState(true);

    const taskInputChangeHandler = (event) => {
        setInputText(event.target.value);
        setInputValid(true)
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (!validateInput()) {
            setInputValid(false)
            return;
        }
        props.onAddTask(inputText);
        setInputText("")
    };


    const validateInput = () => {
        return inputText.trim().length !== 0
    }

    return (
        <form onSubmit={formSubmitHandler}>
            {/*<FormControl className={!inputValid && 'invalid'}> /!*first option add class 'invalid'*!/*/}
            <FormControl invalid={!inputValid}> {/*second option of changing css for 'invalid'*/}
            {/*<div className={`form-control ${!inputValid ? 'invalid' : ''}`}> /!*using css classes instead style attributes in code*!/*/}
                <label>Задачи</label>
                <input type="text" value={inputText} onChange={taskInputChangeHandler}/>
            </FormControl>
            {/*</div>*/}
            {/*<Button disabled={validateInput()} type="submit">Добавить Задачу</Button>*/}
            <Button disabled={false} type="submit">Добавить Задачу</Button>
        </form>
    );
};

export default TaskInput;
