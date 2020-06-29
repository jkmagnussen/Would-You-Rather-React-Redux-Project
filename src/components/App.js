import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import "../index.css";
import Login from "./Login";
import Routes from "./Routes";

import Navbar from "./Navbar";
import Footer from "./Footer/ExternalFooter/Footer";

class App extends Component {
  componentDidMount() {
    this.props.handleGetInitialData();
  }
  render() {
    return (
      <div className="container">
        <Router>
          <Fragment>
            <LoadingBar />
            <div>
              <h1 className="mainTitle">
                Would <br />
                You Rather
              </h1>
              <Routes notLoggedOn={this.props.notLoggedOn} />
            </div>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authUser }) {
  return {
    notLoggedOn: authUser === null,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleGetInitialData: () => {
      dispatch(handleGetInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
