import React, { useEffect, useState } from "react";
import { getPosts } from "../services/api";

function PostList() {

    const [posts, setPosts] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        fetchPosts();

    }, []);

    const fetchPosts = async () => {

        try {

            const data = await getPosts();

            setPosts(data.slice(0, 10));

        }

        catch (err) {

            setError(err.message);

        }

        finally {

            setLoading(false);

        }

    };

    if (loading)
        return <h2>Loading...</h2>;

    if (error)
        return <h2>{error}</h2>;

    return (

        <div>

            <h2>Posts</h2>

            {

                posts.map(post => (

                    <div key={post.id}>

                        <h4>{post.title}</h4>

                        <p>{post.body}</p>

                        <hr />

                    </div>

                ))

            }

        </div>

    );

}

export default PostList;