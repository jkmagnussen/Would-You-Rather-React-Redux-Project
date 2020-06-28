import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import Nav from "./Nav";

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
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                {this.props.authedUser ? (
                  <Route path="/Home" exact component={Home} />
                ) : (
                  <Route path="/" exact component={Login} />
                )}

                <Route path="/leaderboard" component={Leaderboard} />
                <Route path="/new" component={NewPoll} />
              </div>
            )}
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null,
  };
}

export default connect(mapStateToProps)(App);
