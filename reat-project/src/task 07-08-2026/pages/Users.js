import React from "react";
import { Link } from "react-router-dom";

function Users() {

    const users = [
        { id: 1, name: "Abhiram" },
        { id: 2, name: "Aditya" },
        { id: 3, name: "Vishwanth" },
        { id: 4, name: "BN" }
    ];

    return (

        <div>

            <h2>Users List</h2>

            <ul>

                {
                    users.map((user) => (

                        <li key={user.id}>

                            <Link to={`/users/${user.id}`}>
                                {user.name}
                            </Link>

                        </li>

                    ))
                }

            </ul>

        </div>

    );

}

export default Users;