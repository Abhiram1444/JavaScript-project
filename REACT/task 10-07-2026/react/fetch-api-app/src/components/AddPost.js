import React from "react";
import { createPost } from "../services/api";

function AddPost() {

    const addPost = async () => {

        const post = {

            title: "React Fetch",

            body: "Learning POST Method",

            userId: 1

        };

        const data = await createPost(post);

        console.log(data);

        alert("Post Added");
    };

    return (

        <button onClick={addPost}>
            Add Post
        </button>

    );
}

export default AddPost;