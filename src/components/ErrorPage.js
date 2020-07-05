import React from "react";

import errorImage from "./Media/404.png";

import Navbar from "./Navbar";

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Navbar />
        <h1 style={{ color: "white", marginLeft: 20 }}>
          Error 404: Please use the navigation bar above to return.
        </h1>
        <img className="errorImage" src={errorImage} alt="error" />
      </div>
    );
  }
}

export default ErrorPage;
