import React, { useState } from 'react';
function TodoItem({ todo, onDeleteTodo, onUpdateTodo }) {
    const [completed, setCompleted] = useState(todo.completed);
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={(e) => { setCompleted(e.target.checked); }}
            />
            <span>{todo.title}</span>
            <button onClick={() => onUpdateTodo(todo.id, completed)}>Update</button>
            <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>

        </li>
    );
}

export default TodoItem;