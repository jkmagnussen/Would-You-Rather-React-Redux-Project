import React, { Component } from "react";
import { connect } from "react-redux";

import { saveQuestionAnswer } from "../actions/actionQuestions.js";

class Leaderboard extends Component {
  render() {
    const { saveQuestionAnswer, questions, users, authUser } = this.props;
    return <div>Leaderboard</div>;
  }
}

function mapStateToProps({ questions, users, authUser }) {
  return {
    questions,
    users,
    authUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveQuestionAnswer: () => {
      dispatch(saveQuestionAnswer());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
