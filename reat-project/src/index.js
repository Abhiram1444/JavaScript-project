import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.js";
import { AuthProvider } from "./task 07-08-2026/context/AuthContext.js";

import "./task 07-08-2026/styles/global.css";

const root = createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <AuthProvider>
            <App />
        </AuthProvider>
    </BrowserRouter>
);