import React from "react";

import Navbar from "./Navbar";

export default class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar />
        <h1>Error, please use navigation to return to Home. </h1>
      </div>
    );
  }
}
