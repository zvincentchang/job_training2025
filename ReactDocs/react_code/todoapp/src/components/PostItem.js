import React, { useState } from 'react';
function PostItem({ post, onDeletePost, onUpdatePost }) {
    const [editing, setEditing] = useState(false);
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleEditClick = () => {
        setEditing(true);
    };

    const handleSaveClick = () => {
        onUpdatePost(post.id, title, content);
        setEditing(false);
    };

    const handleCancelClick = () => {
        setTitle(post.title);
        setContent(post.content);
        setEditing(false);
    };

    return (
        <li>
            {editing ? (
                <>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        value={content}
                        onChange={e => setContent(e.target.value)}
                    />
                    <button onClick={handleSaveClick}>Save</button>
                    <button onClick={handleCancelClick}>Cancel</button>
                </>
            ) : (
                <>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <button onClick={handleEditClick}>Edit</button>
                    <button onClick={() => onDeletePost(post.id)}>Delete</button>
                </>
            )}
        </li>
    );
}
export default PostItem;