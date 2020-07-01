import React from "react";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import outline from "./Media/outline.png";

class QuestionInfo extends React.Component {
  componentDidMount() {
    this.props.handleGetInitialData();
  }
  render() {
    const { question, auth } = this.props;
    return (
      <div className="questionBox">
        <img src={outline} />
        <p className="qTitle">@{question.author} asks</p>
        <h2 className="questionSubtitle">Would You Rather</h2>

        <button className="questionBtn">{question.optionOne.text}</button>
        <br />
        <button className="questionBtn">{question.optionTwo.text}</button>
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  return {
    question: state.question[id],
    userIds: state.question.author,
    auth: state.authUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleGetInitialData: () => {
      dispatch(handleGetInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionInfo);
