import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Titillium Web:300,400,700", "sans-serif", "Galada"],
  },
});


ReactDOM.render(
  <div >
    <App className="App" />
  </div>,
  document.getElementById("root")
);
