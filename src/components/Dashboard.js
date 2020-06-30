import React from "react";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import { Tabs } from "@feuer/react-tabs";

import Question from "./Question";

import Navbar from "./Navbar";

class Dashboard extends React.Component {
  state = {
    activeTab: "1",
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  componentDidMount() {
    this.props.handleGetInitialData();
  }
  render() {
    const { unansweredQuestions, answeredQuestions } = this.props;
    return (
      <div className="react-tabs">
        <Navbar />
        <Tabs
          tabsProps={{
            style: {
              textAlign: "center",
              fontSize: 80,
            },
          }}
          activeTab={{
            id: "tab1",
          }}
        >
          <Tabs.Tab
            style={{
              fontSize: 50,
            }}
            className="tab1"
            id="tab1"
            title="Unread"
          >
            <div style={{ padding: 10 }}>
              {this.props.unansweredQuestions.map((qid) => (
                <Question id={qid} />
              ))}
            </div>
          </Tabs.Tab>
          <Tabs.Tab className="tab2" id="tab2" title="Read">
            <div style={{ padding: 10 }}>
              {" "}
              {this.props.commented.map((qid) => (
                <Question id={qid} />
              ))}
            </div>
          </Tabs.Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authUser }) {
  const commented = Object.keys(users[authUser].answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    unansweredQuestions: Object.keys(questions).filter(
      (qid) =>
        !commented
          .includes(qid)
          .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    ),
    commented,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleGetInitialData: () => {
      dispatch(handleGetInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
