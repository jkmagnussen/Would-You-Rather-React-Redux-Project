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
  
  
  
  RenderAppropriateInfo = () =>
  {
    if (Object.keys(this.props.userProfile).length > 0){
      return (
        
        <div className="headerWrap">
          <h1 className="title">quandary</h1>
          <button className="headerButton" type="submit" onClick={() => this.props.logout()}>Logout</button>

          <label className="userTitle" style={{ fontSize: 20, color: 'white' }}>
            
            
           Hello <br/>
            {this.props.userProfile.userName.split(" ").slice(0, -1).join(' ') + " "}</label>
            <img className="userImg" src={this.props.userProfile.avatarUrl} />
        </div>
      )
    } else {
      return (
        <div className="headerWrap">
          <h1 className="title">quandary</h1>
            <button className="headerButton" type="submit" onClick={() => this.props.login()}>
            Log in
              </button>
              <button className="headerButton" type="submit" onClick={() => this.props.signUp()}>
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
      <div >

        {this.RenderAppropriateInfo()}
      </div>
    );
  }
}

export default Header;

