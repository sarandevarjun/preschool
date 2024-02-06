import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";

import App from "./App";
import "./lib/animate/animate.min.css";
import "./lib/owlcarousel/assets/owl.carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
