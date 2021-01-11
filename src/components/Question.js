import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class QuestionInfo extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.handleGetInitialData();
  }

  handleSubmit(event, option) {
    if (!this.props.answer) {
      const { question } = this.props;
      event.preventDefault();
      this.props.saveQuestionAnswer(option, question.id);
    } else {
      window.alert("Answer already given");
    }
  }

  render() {
    const { question, Pic } = this.props;

    return (
      <div className="questionBox">
        <img alt="pic" className="imgPic" src={Pic} />
        <div className="total">
          {" "}
          {this.props.total > 1 ? (
            <p>{this.props.total} votes</p>
          ) : (
            <p> {this.props.total} vote</p>
          )}
        </div>
        <Link to={`/questions/${question.id}`}>
          <p className="qTitle">@{question.author} asks</p>
          <p className="timestamp">
            {new Date(Number(question.timestamp) * 1000).toLocaleString()}
          </p>
        </Link>
        <h2 className="questionSubtitle">Would You Rather</h2>
        <div className="buttonAndVote">
          <button
            onClick={(e) => this.handleSubmit(e, "optionOne")}
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
export default QuestionInfo;
