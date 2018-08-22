import React from 'react';
// import './TodoForm.css';

const TodoForm = (props) => {

    let input;

    const onSubmit = (event) => {
        event.preventDefault();
        props.addTodo(input.value);
        input.value = '';
    }

    return (
        <form className="AddTodo" onSubmit={onSubmit}>
           <input type="text" className="AddTodo_input" ref={(node) => input = node} />
           <input type="submit" className="AddTodo_submit" value="Add" />
        </form>
    )
};

export default TodoForm;