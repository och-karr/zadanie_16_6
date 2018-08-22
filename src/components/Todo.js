import React from 'react';
// import './Todo.css';

const Todo = (props) => (
  <li className="Todo">
    <span className="Todo_text">{props.name}</span>
    <span className="Todo_delete_button" ><button onClick={() => props.removeTodo(props.id)}>usun</button></span>
  </li>
);

export default Todo;