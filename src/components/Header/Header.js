import React, { Component } from "react";
import axios from "axios";
import Search from "./Assets/search.png"
import Notification from "./Assets/bell.png";
import Message from "./Assets/message.png";
import friendRequest from "./Assets/friendRequest.png"
import friends from "./Assets/friends.png"


import "./Header.css";


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
  
  RenderAppropriateInfo = () =>
  {
    if (Object.keys(this.props.userProfile).length > 0){
      return (
        
        <div >
          <h2 className="title">pick</h2>

          <button className="headerButtons" type="submit" onClick={() => this.props.logout()}>Logout</button>
          <img className="userImg" src={this.props.userProfile.avatarUrl} />
          <label className="userTitle">
           Hello <br/>
            {this.props.userProfile.userName.split(" ").slice(0, -1).join(' ') + " "}</label>
          <img className="HeaderBtn" src={Notification} />
          <img className="HeaderBtn" src={Message} />
          <img className="HeaderBtn" src={friends} />
          <img className="HeaderBtn" src={Search} />
        </div>
      )
    } else {
      return (
        <div >
          <h2 className="title">pick</h2>
            <button className="headerButtons" type="submit" onClick={() => this.props.login()}>
            Log in
              </button>
              <button className="headerButtons" type="submit" onClick={() => this.props.signUp()}>
            Sign Up
              </button>
        </div>
      )
    }
  }

  
  setUser = (user) => {
    console.log(user);
    this.setState({
      user: user
    })
  }
  
  render(){
    return (
      <div className="headerWrap">
        {this.RenderAppropriateInfo()}
      </div>
    );
  }
}

export default Header;

