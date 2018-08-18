import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data}); //czyli data:data tylko w es6
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);//zwróci wszystie oprócz tego którego identyfikator się zgadza z odrzuconym
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={'To do'}/>
                <TodoList />
            </div>
        ); //zastosowanie loadera
    }
}

export default App;