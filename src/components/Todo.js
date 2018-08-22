import React from 'react';
// import './Todo.css';

const Todo = (props) => (
  <li className="Todo">
    <span className="Todo_text">{props.text}</span>
    <span className="Todo_delete_button" onClick={() => props.removeTodo(props.id)} ><button>usun</button></span>
  </li>
);

export default Todo;