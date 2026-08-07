import React from "react";

import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout.js";

import Home from "../pages/Home.js";
import About from "../pages/About.js";
import Contact from "../pages/Contact.js";
import Login from "../pages/Login.js";
import Dashboard from "../pages/Dashboard.js";
import DashboardHome from "../pages/DashboardHome.js";
import Profile from "../pages/Profile.js";
import Settings from "../pages/Settings.js";
import Users from "../pages/Users.js";
import UserDetails from "../pages/UserDetails.js";
import NotFound from "../pages/NotFound.js";

import ProtectedRoute from "./ProtectedRoute.js";

function AppRoutes() {

    return (

        <Routes>

            <Route element={<MainLayout />}>

                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/login" element={<Login />} />

                {/* Dynamic Routes */}

                <Route
                    path="/users"
                    element={<Users />}
                />

                <Route
                    path="/users/:id"
                    element={<UserDetails />}
                />

                {/* Protected Nested Route */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>

                            <Dashboard />

                        </ProtectedRoute>
                    }
                >

                    <Route
                        index
                        element={<DashboardHome />}
                    />

                    <Route
                        path="profile"
                        element={<Profile />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Route>

        </Routes>

    );

}

export default AppRoutes;