
import React, { useState, useEffect } from 'react';
import Form from './components/form/Form.js';
import Table from './components/tables/Table.js';

function App() {

  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: ""
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  function handleAdd(post) {
    setPosts([...posts, post]);
  }

  function handleUpdate(updatedPost) {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
  }

  function handleDelete(deletedPost) {
    setPosts(posts.filter(post => post.id !== deletedPost.id));
  }

  function handleFormSubmit(data) {
    setPost(data); // Update the post state with the form data
  }

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} />
      <Table posts={posts} />
    </div>
  );
}

export default App;
