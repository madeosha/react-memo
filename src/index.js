import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { SimpleModeProvider } from "./context/SimpleModeContext";
import { LeaderProvider } from "./context/LeaderContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleModeProvider>
      <LeaderProvider>
        <RouterProvider router={router}></RouterProvider>
      </LeaderProvider>
    </SimpleModeProvider>
  </React.StrictMode>,
);
