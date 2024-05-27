import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { SimpleModeProvider } from "./context/SimpleModeContext";
import { LeaderProvider } from "./context/LeaderContext";
import { EpiphanyProvider } from "./context/EpiphanyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SimpleModeProvider>
      <EpiphanyProvider>
        <LeaderProvider>
          <RouterProvider router={router}></RouterProvider>
        </LeaderProvider>
      </EpiphanyProvider>
    </SimpleModeProvider>
  </React.StrictMode>,
);
