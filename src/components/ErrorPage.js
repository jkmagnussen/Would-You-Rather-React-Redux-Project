import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class ErrorPage extends Component {
  render() {
    const { id, replies } = this.props;
    return <div>aeee</div>;
  }
}

function mapStateToProps({ authedUser, tweets, users }, props) {
  const { id } = props.match.params;
}

export default connect(mapStateToProps)(ErrorPage);
