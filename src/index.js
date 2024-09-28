import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppUpdate from "./AppUpdate";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppUpdate />
  </React.StrictMode>
);
