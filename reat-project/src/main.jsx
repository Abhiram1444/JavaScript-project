import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import { Provider } from "react-redux";
import { store } from "../../task 16-07-2026/app/store";

import { ThemeProvider } from "../../task 16-07-2026/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);