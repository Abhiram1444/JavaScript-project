import React from "react";

import AddPost from "./components/AddPost";
import DeletePost from "./components/DeletePost";
import PatchPost from "./components/PatchPost";
import PostList from "./components/PostList";
import UpdatePost from "./components/UpdatePost";

function App() {

  return (

    <div>

      <h1>React Fetch API CRUD</h1>
      <h1>Axios CRUD Example</h1>

      <AddPost />

      <UpdatePost />

      <PatchPost />

      <DeletePost />

      <hr />

      <PostList />

    </div>

  );

}

export default App;