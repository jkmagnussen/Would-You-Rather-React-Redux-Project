import React from "react";
import { connect } from "react-redux";
import { handleGetInitialData, handleSaveAnswer } from "../actions/shared";
import outline from "./Media/outline.png";
import { Link } from "react-router-dom";

class QuestionInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.handleGetInitialData();
  }

  selected(event) {
    this.setState({
      choice: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveQuestionAnswer(this.state.choice);
  }

  render() {
    const { question, id } = this.props;

    return (
      <div className="questionBox">
        <img src={outline} />
        <div className="total">
          {" "}
          {this.props.total > 1 ? (
            <p>{this.props.total} votes</p>
          ) : (
            <p> {this.props.total} vote</p>
          )}
        </div>
        <Link to={`/questions/${id}`}>
          <p className="qTitle">@{question.author} asks</p>
          <p className="timestamp">
            {new Date(Number(question.timestamp) * 1000).toLocaleString()}
          </p>
        </Link>
        <h2 className="questionSubtitle">Would You Rather</h2>
        <div className="buttonAndVote">
          <button
            onClick={this.handleSubmit}
            onChange={this.selected}
            value="optionOne"
            className="questionBtn"
            style={{
              backgroundColor:
                this.props.optionOneVotes > this.props.optionTwoVotes
                  ? "#62c74e"
                  : "#f55442",
            }}
          >
            {question.optionOne.text}
            {Math.round(
              (Number(this.props.optionOneVotes) / Number(this.props.total)) *
                100
            ) > 0
              ? `(${Math.round(
                  (Number(this.props.optionOneVotes) /
                    Number(this.props.total)) *
                    100
                )}%)`
              : null}
          </button>
        </div>

        <div className="buttonAndVote">
          {" "}
          <button
            onClick={this.handleSubmit}
            onChange={this.selected}
            value="optionTwo"
            className="questionBtn"
            style={{
              backgroundColor:
                this.props.optionTwoVotes > this.props.optionOneVotes
                  ? "#62c74e"
                  : "#f55442",
            }}
          >
            {question.optionTwo.text}

            {Math.round(
              (Number(this.props.optionTwoVotes) / Number(this.props.total)) *
                100
            ) > 0
              ? ` (${Math.round(
                  (Number(this.props.optionTwoVotes) /
                    Number(this.props.total)) *
                    100
                )}%)`
              : null}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, { id }) {
  return {
    question: state.question[id],
    userIds: state.question.author,
    auth: state.authUser,
    total:
      state.question[id].optionOne.votes.length +
      state.question[id].optionTwo.votes.length,
    optionOneVotes: state.question[id].optionOne.votes.length,
    optionTwoVotes: state.question[id].optionTwo.votes.length,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveQuestionAnswer: (response) => {
      dispatch(
        handleSaveAnswer(this.props.auth, this.props.question, response)
      );
    },
    handleGetInitialData: () => {
      dispatch(handleGetInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionInfo);
