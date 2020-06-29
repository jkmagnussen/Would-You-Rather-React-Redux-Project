import React from "react";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";

class QuestionInfo extends React.Component {
  componentDidMount() {
    this.props.handleGetInitialData();
  }
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return <div></div>;
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
    handleGetInitialData: () => {
      dispatch(handleGetInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionInfo);
