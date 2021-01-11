import React from "react";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

class CreateQuestion extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
    redirect: false,
  };

  handleOptionOneChange = (event) => {
    event.preventDefault();
    this.setState({
      optionOne: event.target.value,
    });
  };

  handleOptionTwoChange = (event) => {
    event.preventDefault();
    this.setState({
      optionTwo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    this.props.addQuestion(optionOne, optionTwo);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="question">
        <Navbar />
        <div className="questionBox">
          <form className="create" onSubmit={this.handleSubmit}>
            <h2 className="questionSubtitle">Would You Rather</h2>
            <input
              className="input"
              type="text"
              name="optionOne"
              value={this.state.optionOne}
              onChange={this.handleOptionOneChange}
              placeholder="Option One"
            ></input>
            <input
              className="input"
              type="text"
              name="optionTwo"
              value={this.state.optionTwo}
              onChange={this.handleOptionTwoChange}
              placeholder="Option Two"
            ></input>
            <button className="submitCreate">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
  export default CreateQuestion;
