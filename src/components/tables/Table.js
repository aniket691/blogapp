import React from 'react';
import '../tables/Table.css'

function Table({ posts }) {
    return (
        <table className="center-table" border="1">
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>Post ID</th>
                    <th>Title</th>
                    <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {posts.map(post => (
                    <tr key={post.id}>
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
