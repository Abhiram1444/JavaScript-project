import React from "react";

import {
    NavLink,
    Outlet
} from "react-router-dom";

function Dashboard() {

    return (

        <div>

            <h1>Dashboard</h1>

            <nav className="dashboard-nav">

                <NavLink end to="">
                    Home
                </NavLink>

                <NavLink to="profile">
                    Profile
                </NavLink>

                <NavLink to="settings">
                    Settings
                </NavLink>

            </nav>

            <hr />

            <Outlet />

        </div>

    );

}

export default Dashboard;