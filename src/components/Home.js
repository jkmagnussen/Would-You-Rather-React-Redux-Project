import React from "react";
import { connect } from "react-redux";

class Dashboard extends React.Component {
  render() {
    return <div>testing</div>;
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets).sort(
      (a, b) => tweets[b].timestamp - tweets[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(Dashboard);
