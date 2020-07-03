import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { unsetAuthUser } from "../actions/actionsAuthUser";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { logout } = this.props;
    logout();
  };

  render() {
    return (
      <nav className="navWrap">
        <ul className="nav">
          <li className="navItems">
            <NavLink
              activeClassName="active"
              className="navTab"
              to="/"
              exact
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink to="/new" activeClassName="active">
              Create
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink
              className="navTab"
              to="/leaderboard"
              activeClassName="active"
            >
              Leaderboards
            </NavLink>
          </li>
          <li className="loggedAs">
            {this.props.user}
            {this.props.user === this.props.users.id ? (
              <img src={this.props.users.avatarURL} />
            ) : null}
            <button className="logoutBtn" onClick={this.handleSubmit}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authUser, id }) {
  return {
    user: authUser,
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => {
      dispatch(unsetAuthUser());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
