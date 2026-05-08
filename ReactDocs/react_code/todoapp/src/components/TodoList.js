import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTodoForm from './AddTodoForm';
import TodoItem from './TodoItem';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8080/api/todos')
            .then(response => {
                setTodos(response.data);
            });
    }, []);

    const handleAddTodo = (todo) => {
        console.log('handleAddTodo:' + JSON.stringify(todo));
        axios.post('http://localhost:8080/api/todos', todo)
            .then(response => {
                setTodos([...todos, response.data]);
            });
        setDisplay(false);
    };

    const handleDeleteTodo = (id) => {
        axios.delete(`http://localhost:8080/api/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            });
    };

    const handleUpdateTodo = (id, flag) => {
        var t = todos.filter(todo => (todo.id === id));
        t[0].completed = flag;
        console.log("handleUpdateTodo:" + JSON.stringify(t[0]));
        axios.put(`http://localhost:8080/api/todos/${id}`, t[0])
            .then(response => {
                setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
            });
    };

    return (
        <div>
            <h1>TODO List</h1>
            <button onClick={() => { setDisplay(!display) }}>Show Add</button>
            {display && <AddTodoForm onAddTodo={handleAddTodo} todo={{ id: 0, title: '', completed: false }} />}
            <ul>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={handleDeleteTodo}
                        onUpdateTodo={handleUpdateTodo}
                    />

                ))}
            </ul>
        </div>
    );
}


export default TodoList;
