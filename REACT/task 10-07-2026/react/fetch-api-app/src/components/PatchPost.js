import React from "react";
import { patchPost } from "../services/api";

function PatchPost() {

    const patch = async () => {

        const data = await patchPost(1, {

            title: "Patched Title"

        });

        console.log(data);

        alert("Patched Successfully");

    };

    return (

        <button onClick={patch}>
            Patch Post
        </button>

    );
}

export default PatchPost;