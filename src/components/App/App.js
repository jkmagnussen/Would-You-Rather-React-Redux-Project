import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./App.css";
import Routes from "../Routes";
import Login from "../Login/Login.js";
import Header from "../Header/Header.js";
import Footer from "../Footer/ExternalFooter/Footer";
import Register from "../Register/Register.js";
import { _getUsers } from "../../utils/_DATA";
import axios from "axios";
import video from "./Assets/advert.mp4";


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

    if (userObject){
      const token = JSON.parse(userObject).access_token
      axios.interceptors.request.use((config) => {
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

     if (localStorage.getItem("userObject")){
       axios.get("/users/me")
         .then((response) => {
           self.setState({
             user: response.data
           })
           .then(self.props.history.push("/dashboard"))
         }).catch(() =>
         {
           alert("please log in")
         })
     }
    }
  
  setUser = (userToken) => {
    localStorage.setItem("userObject", JSON.stringify(userToken))
    console.log(userToken);
    const token = userToken.access_token
    console.log(token);
      axios.interceptors.request.use((config) =>
      {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    const self = this;
    axios.get("/users/me")
      .then((response) =>{
        self.setState({
          user: response.data
        })
      });
  }

  conditionalRender = () =>{
    if (this.state.showLogin === true & Object.keys(this.state.user).length == 0){
      return (
        <div>
          <Login setUser={this.setUser} />
          <video
            className="advert"
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
          <Register setUser={this.setUser}/>
          <video
            className="advert"
            style={{ marginTop: 25 }}
            controls
            autostart
            autoPlay
            muted
            src={video}
            type="video/mp4" />
      </div>)
    } else if (Object.keys(this.state.user).length > 0){
      return <Routes />;
    } else {
      return <video
        className="advert"
        controls
        autostart
        autoPlay
        muted
        src={video}
        type="video/mp4" />
    }
  }

  logout = () => {
    this.setState({
      user: {}
    })
    localStorage.setItem("userObject", undefined)
    window.localStorage.clear();
    this.props.history.push("/")
  }
  
  render(){
    console.log(this.state.user)
    const content = <Routes />;
    return (
      <div className="container">
          <Fragment>
          <Header logout={this.logout} userProfile={this.state.user} login={this.toggleLogin} signUp={this.toggleRegister} />
            {this.conditionalRender()}
        </Fragment>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
