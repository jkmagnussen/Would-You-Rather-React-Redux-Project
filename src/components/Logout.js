import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Logout extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h4>{user.name}</h4>
        <img src={user.avatarURL} />
      </div>
    );
  }
}

function mapStateToProps({ users }, { id }) {
  return {
    user: users[id],
  };
}

export default connect(mapStateToProps)(Logout);
