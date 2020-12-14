import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { handleAddUser } from "../actions/shared";
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
        <h3 className="signUpTitle">Sign Up Now: </h3>
        <label>
          Name: 
           <input className="registerInput"
            value={this.state.name}
          onChange={this.handleUserName}/>
        </label>
        <br />
        <label>
          Email: 
           <input className="registerInput"
            value={this.state.email}
          onChange={this.handleUserEmail}/>
        </label>
        <br />
        <label>
          Password: 
           <input className="registerInput"
            value={this.state.password}
          onChange={this.handleUserPassword}/>
        </label>
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

function mapDispatchToProps(dispatch) {
  return {
    addUser: (name, email, password) => {
      dispatch(handleAddUser(name, email, password))
    },
  };
}

export default connect(null, mapDispatchToProps)(Register);


