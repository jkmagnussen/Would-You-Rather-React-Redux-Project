import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import tormund from "./Media/tormund.jpg";

import User from "./User";
import { setAuthUser } from "../actions/actionsAuthUser";
import { handleGetInitialData } from "../actions/shared";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <form className="loginWrap" onSubmit={this.handleSubmit}>
        <img className="loginImg" src={tormund} />
        <br />
        <select
          className="selectLogin"
          value={this.state.selectedId}
          onChange={this.handleSelectUser}
        >
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
      </form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (id) => {
      dispatch(setAuthUser(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
