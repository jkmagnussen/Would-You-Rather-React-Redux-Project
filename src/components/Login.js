import React from "react";
import {_getUsers} from "../utils/_DATA";
import { setAuthUser } from "../actions/actionsAuthUser";
import { Route } from "react-router-dom";
import Register from "./Register";
import axios from "axios";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selectedId: 0,
      username: '',
      password:''
    };
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
  
    _getUsers().then(function(response){
      self.setState({ users: response.data });
      
      console.log(self.state.users);
    })
    console.log(self.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const self = this;
    console.log(self.state);
    axios.post(`/users/session`,
      {
        "email": self.state.username,
        "password": self.state.password
      }).then(function (response){
        console.log(response.data)
        self.props.setUser(response.data);
      }).catch(function (error)
      {
        console.log("Error");
      })
    }

  handleSelectUser = (event) => {
    this.setState({
      selectedId: event.target.value,
    });
  };



  render() {
    const { users } = this.props;
    
    return (
      <div class="loginForm">
        <form className="registerContainer" onSubmit={this.handleSubmit}>

            <input
            style={{ fontSize: "4vw" }}
            className="registerInput"
            placeholder="Username"
            value={this.state.username}
            onChange={(event) => this.setState({username:event.target.value})}/>

          <br />

            <input
            style={{ fontSize: "4vw" }}
            className="registerInput"
            placeholder="Password"
            name="hello"
            value={this.state.password}
            onChange={(event) => this.setState({password:event.target.value})}/>

          <br/>
        <button className="loginBtn" type="submit">
          Log in
        </button>
        <br />
        </form>
        </div>
    );
  }
}

export default Login;
