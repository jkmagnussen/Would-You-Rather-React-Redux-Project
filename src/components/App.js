import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../index.css";
import Routes from "./Routes";
import Footer from "./Footer/ExternalFooter/Footer";
import Login from "./Login";
import Header from "./Header";
import Register from "./Register";
import { _getUsers } from "../utils/_DATA";
import axios from "axios";
import video from "../media/advert.mp4";

// Main Appp

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       user: {},
      showLogin: false,
      showSignUp: false,
    };
    axios.defaults.baseURL = `http://localhost/api/`;
    const userObject = localStorage.getItem("userObject");

    if (userObject)
    {
      const token = JSON.parse(localStorage.getItem(userObject)).access_token
      axios.interceptors.request.use((config) =>
      {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    }

  }

  toggleLogin = () => {
    this.setState({
      showLogin: !this.state.showLogin, 
      showSignUp: false,
    })
  }

    toggleRegister = () => {
    this.setState({
      showLogin: false, 
      showSignUp: !this.state.showSignUp,
    })
  }
  
   componentDidMount() {
     const self = this;
   }
  
  setUser = (user) => {
    localStorage.setItem("userObject", JSON.stringify(user))
  }

  conditionalRender = () =>{
    if (this.state.showLogin === true & Object.keys(this.state.user).length == 0){
      return (
        <div>
          <Login setUser={this.setUser} />
          <video
            className="pitch"
            style={{ marginTop: 25 }}
            controls
            autostart
            autoPlay
            muted
            src={video} type="video/mp4" />
        </div>
      )
    }
    else if (this.state.showSignUp === true){ 
      return (
        <div>
        <Register />
          <video
            className="pitch"
            style={{ marginTop: 25 }}
            controls
            autostart
            autoPlay
            muted
            src={video}
            type="video/mp4" />
      </div>)
    }else{
      return <video
        className="pitch"
        controls
        autostart
        autoPlay
        muted
        src={video}
        type="video/mp4" />
    }
  }
  
  render(){
    const content = <Routes />;

    return (
      <div className="container">
        <Router>
          <Fragment>
            <Header login={this.toggleLogin} signUp={this.toggleRegister}/>

            {this.conditionalRender()}
            
            {content}
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
