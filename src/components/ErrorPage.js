import React from "react";
import { connect } from "react-redux";

class ErrorPage extends React.Component {
  render() {
    return <div></div>;
  }
}

function mapStateToProps({ authedUser, tweets, users }, props) {}

export default connect(mapStateToProps)(ErrorPage);
