import React from "react";
import { NavLink } from "react-router-dom";

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
            <NavLink activeClassName="active" className="navTab" to="/" exact>
              Home
            </NavLink>
          </li>
          <li className="navItems">
            <NavLink to="/add" activeClassName="active">
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
            
            <button className="logoutBtn" onClick={this.handleSubmit}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}


