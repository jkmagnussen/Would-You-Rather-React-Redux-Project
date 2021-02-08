import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../index.css";
import Routes from "./Routes";
import Footer from "./Footer/ExternalFooter/Footer";
import Login from "./Login";
import Header from "./Header"
import Register from "./Register";
import { _getUsers } from "../utils/_DATA";
import axios from "axios";



// Main App

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {}
    };
    this.setUser = this.setUser.bind(this)
    axios.defaults.baseURL = `http://localhost/api/`;
  }
  
   componentDidMount() {
     const self = this;
   }
  
  setUser = (user) => {
    console.log(user);
    this.setState({
      user: user
    })
  }
  
  render() {
    let content;
    
    if (Object.keys(this.state.user).length == 0) {
      content = <Login setUser={this.setUser}/>;
    } else {
      content = <Routes />;
    }

    return (
      <div className="container">
        <Router>
          <Fragment>
            <Header />
            {content}
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
