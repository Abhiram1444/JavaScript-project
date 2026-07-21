import { useEffect, useState } from "react";
import "./UserCards.css";

function UserCards() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function fetchUsers() {

            try {

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }

                const data = await response.json();

                setUsers(data);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        }

        fetchUsers();

    }, []);

    if (loading) {
        return <h2 className="message">Loading Users...</h2>;
    }

    if (error) {
        return <h2 className="message">{error}</h2>;
    }

    return (

        <div className="container">

            {
                users.map((user) => (

                    <div className="card" key={user.id}>

                        <h2>{user.name}</h2>

                        <p>
                            <strong>Username:</strong> {user.username}
                        </p>

                        <p>
                            <strong>Email:</strong> {user.email}
                        </p>

                        <p>
                            <strong>Phone:</strong> {user.phone}
                        </p>

                        <p>
                            <strong>Website:</strong> {user.website}
                        </p>

                        <p>
                            <strong>City:</strong> {user.address.city}
                        </p>

                        <p>
                            <strong>Company:</strong> {user.company.name}
                        </p>

                    </div>

                ))
            }

        </div>

    );
}

export default UserCards;