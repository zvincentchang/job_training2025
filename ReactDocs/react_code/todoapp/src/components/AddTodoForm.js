import React, { useState } from 'react';
function AddTodoForm({ onAddTodo, todo }) {
    const [title, setTitle] = useState(todo.title);
    const [id, setId] = useState(todo.id);
    const [completed, setCompleted] = useState(todo.completed);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo({ id, title, completed });
        setTitle('');
        setId(0);
        setCompleted(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new TODO id"
                id="id"
                value={id}
                onChange={e => setId(e.target.value)}
            />
            <input
                type="text"
                id="title"
                placeholder="Add a new TODO Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="checkbox"
                id="completed"
                checked={completed}
                onChange={e => setCompleted(e.target.checked)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default AddTodoForm;