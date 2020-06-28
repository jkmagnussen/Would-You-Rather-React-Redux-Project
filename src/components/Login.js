import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import User from "./User";
import { setAuthUser } from "../actions/actionsAuthUser";
import { handleGetInitialData } from "../actions/shared";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedId: null,
    };
  }

  handleSelectUser = (value) => {
    this.setState({
      selectedId: value,
    });
  };

  render() {
    return (
      <form>
        <select value={this.state.selectedId} onChange={this.handleSelectUser}>
          {this.props.users.map((user) => {
            return (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            );
          })}
        </select>
      </form>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: users,
  };
}

export default connect(mapStateToProps, {
  login: setAuthUser,
  getPolls: handleGetInitialData,
})(Login);
