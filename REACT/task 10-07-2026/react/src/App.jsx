import React from "react";

import AddPost from "./Addpost";
import DeletePost from "./DeletePost";
import PatchPost from "./PatchPost";
import PostList from "./PostList";
import UpdatePost from "./Updatepost";

function App() {

  return (

    <div>

      <h1>React Fetch API CRUD</h1>

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