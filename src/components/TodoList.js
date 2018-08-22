import React from 'react';
import Todo from './Todo';
// import './TodoList.css';

const TodoList = (props) => (
   <ul className="TodoList">
       {props.dataElements.map((dataElements, i) => (
           <Todo
               key={i}
               id={dataElements.id}
               name={dataElements.text}
               removeTodo={props.removeTodo}
           />)
       )}
   </ul>
);

export default TodoList;