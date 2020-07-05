import React from "react";
import { connect } from "react-redux";

import Navbar from "./Navbar";

class Leaderboard extends React.Component {
  state = {
    activeTab: "1",
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
    this.setPosition = this.setPosition.bind(this);
  }

  setPosition(status) {
    if (status === 1) {
      return (
        <div className="emoji">
          <span aria-label="abc" role="img">
            &#x1f947;
          </span>
        </div>
      );
    } else if (status === 2) {
      return (
        <div className="emoji">
          <span aria-label="abc" role="img">
            &#x1F948;
          </span>
        </div>
      );
    } else {
      return (
        <div className="emoji">
          <span aria-label="abc" role="img">
            &#x1F949;
          </span>
        </div>
      );
    }
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <Navbar />
        {users.map((user, index) => (
          <div className="questionBox" key={user.id}>
            <div>
              <img
                src={user.avatarURL}
                className="imgPic"
                alt={`Avatar of ${user.name}`}
              />
              <div className="leaderName">
                {this.setPosition(index + 1)}
                <div className="titleL">{user.name}</div>
              </div>
              <h2>Questions Asked: {user.questions.length}</h2>
              <h2>Voted on: {Object.keys(user.answers).length}</h2>
              <br />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => {
  const userScore = (user) =>
    Object.keys(user.answers).length + user.questions.length;
  return {
    users: Object.values(users).sort((a, b) => userScore(b) - userScore(a)),
  };
};

export default connect(mapStateToProps)(Leaderboard);
