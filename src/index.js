import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif", "Galada"],
  },
});


ReactDOM.render(
  <Router >
    <App className="App" />
  </Router>,
  document.getElementById("root")
);
