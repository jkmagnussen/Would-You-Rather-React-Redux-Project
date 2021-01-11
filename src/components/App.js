import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../index.css";
import Routes from "./Routes";
import Footer from "./Footer/ExternalFooter/Footer";
import Login from "./Login";
import Header from "./Header"
import {_getUsers} from "../utils/_DATA";


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

     _getUsers().then(function (response){
       self.setState({
         users: response.data
       })
       console.log(self.state.users);
     })
   }
  
  
  render() {
    let content;
    if (true) {
      content = <Login users={this.state.users}/>;
    } else {
      content = <Routes />;
    }

    return (
      <div className="container">
        <Router>
          <Fragment>
            <Header/>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App
