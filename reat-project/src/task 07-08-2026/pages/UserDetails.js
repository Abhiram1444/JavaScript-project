import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    return (

        <div>

            <h2>User Details</h2>

            <h3>User ID : {id}</h3>

            <button
                onClick={() => navigate("/users")}
            >
                Back to Users
            </button>

        </div>

    );

}

export default UserDetails;