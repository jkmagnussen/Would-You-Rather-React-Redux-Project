import React from "react";
import { connect } from "react-redux";
import { handleGetInitialData, handleSaveAnswer } from "../actions/shared";
import back from "./Media/back.png";
import Navbar from "./Navbar";
import { withRouter } from "react-router";

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

  handleSubmit(event, option) {
    event.preventDefault();

    this.props.saveQuestionAnswer(this.state.choice);
  }

  render() {
    const { question } = this.props;

    return (
      <div>
        {" "}
        <Navbar />
        <div className="questionBox">
          <img className="imgPic" alt="img" src={this.props.Pic} />

          <div className="total">
            {" "}
            {this.props.total > 1 ? (
              <p>{this.props.total} votes</p>
            ) : (
              <p> {this.props.total} vote</p>
            )}
          </div>

          <img
            alt="img2"
            className="backBtn"
            onClick={this.props.history.goBack}
            src={back}
          />

          <p className="qTitle">@{question.author} asks</p>
          <p className="timestamp">
            {new Date(Number(question.timestamp) * 1000).toLocaleString()}
          </p>

          <h2 className="questionSubtitle">Would You Rather</h2>
          <div className="buttonAndVote">
            <button
              onClick={(e) => this.handleSubmit(e, "optionOne")}
              value="optionOne"
              className="questionBtn"
              style={{
                backgroundColor:
                  this.props.lenOne > this.props.lenTwo ? "#62c74e" : "#f55442",
              }}
            >
              {question.optionOne.text}
              {Math.round(
                (Number(this.props.optionOneVotes) / Number(this.props.total)) *
                  100
              ) > 0
                ? ` (${Math.round(
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
              onClick={(e) => this.handleSubmit(e, "optionTwo")}
              value="optionTwo"
              className="questionBtn"
              style={{
                backgroundColor:
                  this.props.lenTwo > this.props.lenOne ? "#62c74e" : "#f55442",
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
          <p>{`${question.optionOne.text} total votes: ${question.optionOne.votes.length}`}</p>
          <p>{`${question.optionTwo.text} total votes: ${question.optionTwo.votes.length}`}</p>
          <h2 className="voters">Activity</h2>
          <ul className="voterList">
            {this.props.optionOne.map((info) => (
              <li
                style={{
                  color:
                    this.props.lenOne > this.props.lenTwo
                      ? "#62c74e"
                      : "#f55442",
                }}
              >
                {info} voted: {question.optionOne.text}
              </li>
            ))}
          </ul>
          <ul className="voterList">
            {this.props.optionTwo.map((info) => (
              <li
                style={{
                  color:
                    this.props.lenTwo > this.props.lenOne
                      ? "#62c74e"
                      : "#f55442",
                }}
              >
                {info} voted: {question.optionTwo.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ question, users, authUser }, { match }) {
  const { id } = match.params;
  const q = question[id];
  const user = users[question.author];
  const total = Number.parseFloat(
    question[id].optionOne.votes.length + question[id].optionTwo.votes.length
  );
  const optionOne = question[id].optionOne.votes;
  const optionTwo = question[id].optionTwo.votes;
  const lenOne = question[id].optionOne.votes.length;
  const lenTwo = question[id].optionTwo.votes.length;

  const ques = question[id];
  const userz = users[ques.author];

  return {
    user,
    total,
    question: q,
    authUser,

    answers: users[authUser].answers[id],
    Pic: userz.avatarURL,
    optionOne,
    optionTwo,
    lenOne,
    lenTwo,
    totalPercent:
      question[id].optionOne.votes.length + question[id].optionTwo.votes.length,
    optionOneVotes: question[id].optionOne.votes.length,
    optionTwoVotes: question[id].optionTwo.votes.length,
  };
}

function mapDispatchToProps(dispatch, props) {
  const { id } = props.match.params;
  return {
    saveQuestionAnswer: (answer) => {
      dispatch(handleSaveAnswer(id, answer));
    },
    handleGetInitialData: () => {
      dispatch(handleGetInitialData());
    },
  };
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionInfo)
);
