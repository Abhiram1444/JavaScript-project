import React from "react";

import {
    Link
} from "react-router-dom";

function NotFound() {

    return (

        <div className="not-found">

            <h1>404</h1>

            <h2>Oops!</h2>

            <p>

                The page you requested
                does not exist.

            </p>

            <Link to="/">

                Go Back Home

            </Link>

        </div>

    );

}

export default NotFound;