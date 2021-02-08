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
    };
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // php -S localhost:8080 -t public public/index.php

  // php server terminal command

  componentDidMount() {
    const self = this;
    axios.interceptors.request.use((config) =>
    {
      config.headers.Authorization = "iuyghoiseuhoiuhesrboiug"
      return config;
    })
    _getUsers().then(function(response){
      self.setState({ users: response.data });
      
      console.log(self.state.users);
    })
    axios.post(`/users/session`,
      {
        "email": "NEW@hjello.com",
        "password": "Hello worldf"
      }).then(function (response){
        console.log(response.data)
      }).then(function (error)
      {
        console.log("Error");
      })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.setUser(this.state.users[this.state.selectedId]);
    }

  handleSelectUser = (event) => {
    this.setState({
      selectedId: event.target.value,
    });
  };

  render() {
    const { users } = this.props;
    
    return (
      <div>
      <form className="loginWrap" onSubmit={this.handleSubmit}>
        <br />
        <select
          className="selectLogin"
          value={this.state.selectedId}
          onChange={this.handleSelectUser}
        >
            <option>Select a username</option>
            {
              this.state.users.map((user, index) => (
                <option key={index} value={index}>
                 {user.username}
                </option> 
              ))
            }
        </select>
        <br />
        <button className="loginBtn" type="submit">
          Log in
        </button>
        <br />
      </form>
      <Register />
      </div>
    );
  }
}

export default Login;
