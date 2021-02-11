import React, { Component } from "react";
import axios from "axios";
import Login from "./Login";
import Register from "./Register";
import video from "../media/advert.mp4";


class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
       user: {},
      login: false,
      signUp: false,
    };
    this.toggleRegister = this.toggleRegister.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.setUser = this.setUser.bind(this)
    axios.defaults.baseURL = `http://localhost/api/`;
  }

  toggleLogin = () => {
    this.setState({
      login: true, 
      signUp: false,
    })
  }

    toggleRegister = () => {
    this.setState({
      login: false, 
      signUp: true,
    })
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

  conditionalRender = () =>{
    if (this.state.login === true & Object.keys(this.state.user).length == 0){
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
    else if (this.state.signUp === true){ 
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


    return (
            <div className="headerWrap">
             <h1 className="title">quandary
              <button className="loginBtn1" type="submit" onClick={() => this.props.login()}>
            Log in
              </button>
              <button className="loginBtn2" type="submit" onClick={() => this.props.signUp()}>
            Sign Up
              </button>
             </h1>
            </div>
    );
  }
}

export default Header;

