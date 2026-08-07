import React from "react";

import {
    useNavigate,
    useLocation
} from "react-router-dom";

import { useAuth } from "../context/AuthContext.js";

function Login() {

    const navigate = useNavigate();

    const location = useLocation();

    const { login } = useAuth();

    const from =
        location.state?.from?.pathname || "/dashboard";

    const handleLogin = () => {

        login();

        navigate(from, {
            replace: true
        });

    };

    return (

        <div className="login-page">

            <h2>Login</h2>

            <p>
                Click the button below to login.
            </p>

            <button
                onClick={handleLogin}
            >
                Login
            </button>

        </div>

    );

}

export default Login;