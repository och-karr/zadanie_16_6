import React from 'react';
import Todo from './Todo';
// import './TodoList.css';

const TodoList = (props) => (
   <ul className="TodoList">
       {props.dataElements.map((dataElements, i) => (
           <Todo
               key={i}
               name={dataElements.text}
               removeTodo={(id) => props.removeTodo(id)}
           />)
       )}
   </ul>
);

export default TodoList;