import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import "../index.css";
import Home from "./Home";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Login from "./Login";

import Footer from "./Footer/ExternalFooter/Footer";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetInitialData());
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

              <div>
                {this.props.authedUser === null ? (
                  <Route path="/Home" exact component={Home} />
                ) : (
                  <Route path="/" exact component={Login} />
                )}

                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/new" component={NewPoll} />
              </div>
            </div>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
