const API = "https://jsonplaceholder.typicode.com/posts";

// GET
export const getPosts = async () => {
    const response = await fetch(API);

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }

    return response.json();
};

// POST
export const createPost = async (post) => {
    const response = await fetch(API, {
        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(post)
    });

    if (!response.ok) {
        throw new Error("Failed to create");
    }

    return response.json();
};

// PUT
export const updatePost = async (id, post) => {
    const response = await fetch(`${API}/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(post)

    });

    if (!response.ok) {
        throw new Error("Update Failed");
    }

    return response.json();
};

// PATCH
export const patchPost = async (id, post) => {

    const response = await fetch(`${API}/${id}`, {

        method: "PATCH",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(post)

    });

    if (!response.ok) {
        throw new Error("Patch Failed");
    }

    return response.json();
};

// DELETE
export const deletePost = async (id) => {

    const response = await fetch(`${API}/${id}`, {

        method: "DELETE"

    });

    if (!response.ok) {
        throw new Error("Delete Failed");
    }

    return true;
};