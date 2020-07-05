import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import "../index.css";
import Routes from "./Routes";
import Footer from "./Footer/ExternalFooter/Footer";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.handleGetInitialData();
  }
  render() {
    let content;
    if (this.props.notLoggedOn) {
      content = <Login />;
    } else {
      content = <Routes />;
    }

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

              {content}
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
