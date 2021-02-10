import React, { Component, Fragment } from "react";
import "../index.css";

import Thumb from "../media/thumb.png";

class Register extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      formSubmit: false,
    };

    this.handleUserName = this.handleUserName.bind(this);
    this.handleUserEmail = this.handleUserEmail.bind(this);
    this.handleUserPassword = this.handleUserPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;
    this.props.addUser(name, email, password);
    this.setState({ formSubmit: true })
  };

  handleUserName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

   handleUserEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
   };
  
   handleUserPassword = (event) => {
    this.setState({
      password: event.target.value,
    });
   };
  

  render() {
    return (

      this.state.formSubmit === false ? 
        <form className="registerContainer" onSubmit={this.handleSubmit}>
        <h3 className="signUpTitle">Sign Up: </h3>

           <input
              style={{fontSize:"4vw"}}
              className="registerInput"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleUserName}/>
        <br />
           <input
              style={{fontSize:"4vw"}}
              className="registerInput"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserEmail}/>
        <br />
          <input
            style={{fontSize:"4vw"}}
            className="registerInput"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserPassword}/>
          <br />
            <button className="loginBtn" type="submit">
          Register
        </button>
        </form>
        : 
        <div>
          <img className="thumb" src={Thumb} /> 
        </div>
      
    );
  }
}

export default Register;


