import React, { Component, Fragment } from "react";
import ProfilePicUpload from '../ProfilePicUpload/ProfilePicUpload'
import "./Register.css";


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
      <div class="registerForm">
        <form className="registerContainer" onSubmit={this.handleSubmit}>

           <input

              className="registerInput"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleUserName}/>
        <br />
           <input

              className="registerInput"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserEmail}/>
        <br />
          <input

            className="registerInput"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleUserPassword}/>
          <br />
          <p className="imageUploadText">Optional profile picture upload:</p>
          <ProfilePicUpload />
          
          <button className="registerBtn"
            type="submit">Register</button>
        </form>
      </div>
      
    );
  }
}

export default Register;


