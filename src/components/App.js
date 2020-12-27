import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import "../index.css";
import Routes from "./Routes";
import Footer from "./Footer/ExternalFooter/Footer";
import Login from "./Login";
import {_getUsers} from "../utils/_DATA";

import users from "../utils/_DATA";

// Main App

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      selectedId: null,
      users: {}
    };
  }
  
  
   componentDidMount() {
    const self = this;
    _getUsers().then(function(users){
      self.setState({users:users});
    })
   }
  
  
  render() {
    let content;
    console.log(users)
    if (true) {
      content = <Login users={this.state.users}/>;
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

export default App
