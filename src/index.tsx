import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { App } from "./app";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div id="top"></div>
    <App />
    <div id="bottom"></div>
  </React.StrictMode>
);
