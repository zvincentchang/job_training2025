import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    const handleAddPost = (title, content) => {
        axios.post('http://localhost:8080/api/posts', { title, content })
            .then(response => {
                setPosts([...posts, response.data]);
            });
    };

    const handleDeletePost = (id) => {
        axios.delete(`http://localhost:8080/api/posts/${id}`)
            .then(() => {
                setPosts(posts.filter(post => post.id !== id));
            });
    };

    const handleUpdatePost = (id, title, content) => {
        axios.put(`http://localhost:8080/api/posts/${id}`, { title, content })
            .then(response => {
                setPosts(posts.map(post => (post.id === id ? response.data : post)));
            });
    };

    return (
        <div>
            <h1>Blog Posts</h1>
            <AddPostForm onAddPost={handleAddPost} />
            <ul>
                {posts.map(post => (
                    <PostItem
                        key={post.id}
                        post={post}
                        onDeletePost={handleDeletePost}
                        onUpdatePost={handleUpdatePost}
                    />
                ))}
            </ul>
        </div>
    );
}



export default PostList;
