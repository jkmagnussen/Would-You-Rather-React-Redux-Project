import React from "react";
import {_getUsers} from "../utils/_DATA";
import { setAuthUser } from "../actions/actionsAuthUser";
import { Route } from "react-router-dom";
import Register from "./Register";


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
    _getUsers().then(function(response){
      self.setState({ users: response.data });
      
      console.log(self.state.users);
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
