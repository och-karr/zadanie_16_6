import React, { Component } from 'react';
import uuid from 'uuid';
// import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList.js';

class App extends Component {
    constructor(props) {
        super(props);
            
        this.state = {
            dataElements: [
                {
                    id: 1,
                    text: 'clean room'
                }, 
                {
                    id: 2,
                    text: 'wash the dishes'
                }, 
                {
                    id: 3,
                    text: 'feed my cat'
                }
            ]
        }
    }

    addTodo = (val) => {
        const Todo = {
            text: val,
            id: uuid.v4(),
        }
        this.setState({
            dataElements: [...this.state.dataElements, Todo]
        })
    }

    removeTodo(id) {
        this.setState({
            dataElements: [...this.state.dataElements.filter(Todo => Todo.id !== id)]
        })
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={'To do'}/>
                <TodoList dataElements = {this.state.dataElements} removeTodo={(id) => this.removeTodo(id)} />
            </div>
        );
    }
}

export default App;