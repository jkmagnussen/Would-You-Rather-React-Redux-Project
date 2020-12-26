import React from "react";
import {_getUsers} from "../utils/_DATA";
import { setAuthUser } from "../actions/actionsAuthUser";
import { Route } from "react-router-dom";
import Register from "./Register";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      selectedId: null,
    };
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // php php -S localhost:8080 -t public public/index.php


  componentDidMount() {
    const self = this;
    _getUsers().then(function(users){
      self.setState({users:users});
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { selectedId } = this.state;
    const { login } = this.props;

    if (selectedId) {
      login(selectedId);
    } else {
      alert("Please choose a user first");
    }
  };

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
          value={this.state.selectedId ? this.state.selectedId : ""}
          onChange={this.handleSelectUser}
        >
          <option>Select a username</option>
          {Object.keys(users).map((user) => (
            <option key={user} value={user}>
              {users[user].name}
            </option>
          ))}
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
