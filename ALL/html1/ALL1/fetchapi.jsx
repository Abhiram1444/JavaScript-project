import React, { useState, useEffect } from 'react';
const App = () => {
 const [posts, setPosts] = useState([]);
 useEffect(() => {
   fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
     .then((response) => response.json())
     .then((data) => {
       setPosts(data);
     })
     .catch((err) => {
       console.error(err.message);
     });
 }, []);
 return (
   <div className="posts-container">
     {posts.map((post) => (
       <div className="post-card" key={post.id}>
         <h2 className="post-title">{post.title}</h2>
         <p className="post-body">{post.body}</p>
       </div>
     ))}
   </div>
 );
};
export default App;