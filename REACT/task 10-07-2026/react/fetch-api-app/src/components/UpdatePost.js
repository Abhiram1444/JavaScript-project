import React from "react";
import { updatePost } from "../services/api";

function UpdatePost() {

    const update = async () => {

        const post = {

            id: 1,

            title: "Updated Title",

            body: "Updated Body",

            userId: 1

        };

        const data = await updatePost(1, post);

        console.log(data);

        alert("Updated Successfully");
    };

    return (

        <button onClick={update}>
            Update Post
        </button>

    );
}

export default UpdatePost;