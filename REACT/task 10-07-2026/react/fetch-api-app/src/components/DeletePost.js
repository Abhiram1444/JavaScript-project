import React from "react";
import { deletePost } from "../services/api";

function DeletePost() {

    const remove = async () => {

        await deletePost(1);

        alert("Deleted Successfully");

    };

    return (

        <button onClick={remove}>
            Delete Post
        </button>

    );

}

export default DeletePost;