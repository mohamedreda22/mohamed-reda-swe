/* import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
 */

import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);