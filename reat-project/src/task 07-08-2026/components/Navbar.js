import React from "react";

import {
    NavLink
} from "react-router-dom";

import { useAuth } from "../context/AuthContext.js";

function Navbar() {

    const {
        isAuthenticated,
        logout
    } = useAuth();

    return (

        <nav className="navbar">

            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/about">
                About
            </NavLink>

            <NavLink to="/contact">
                Contact
            </NavLink>

            <NavLink to="/users">
                Users
            </NavLink>

            <NavLink to="/dashboard">
                Dashboard
            </NavLink>

            {
                isAuthenticated
                    ?
                    <button onClick={logout}>
                        Logout
                    </button>
                    :
                    <NavLink to="/login">
                        Login
                    </NavLink>
            }

        </nav>

    );

}

export default Navbar;