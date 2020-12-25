import React from "react";
import { connect } from "react-redux";
import { handleGetInitialData } from "../actions/shared";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import Question from "./Question";

import Navbar from "./Navbar";

  // backend php php -S localhost:8080 -t public public/index.php

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
    return (
      <div className="react-tabs">
        <Navbar />
        <Tabs>
          <TabList style={{ textAlign: "center", fontSize: "40px" }}>
            <Tab>Unanswered</Tab>
            <Tab>Answered</Tab>
          </TabList>

          <TabPanel>
            {" "}
            <div style={{ padding: 10 }}>
              {this.props.unansweredQuestions.map((qid) => (
                <Question key={qid} id={qid} pic={this.props.userPics} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            {" "}
            <div>
              {this.props.commented.map((qid) => (
                <Question key={qid} id={qid} pic={this.props.userPics} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ question, users, authUser }) {
  const commented = Object.keys(users[authUser].answers).sort(
    (a, b) => question[b].timestamp - question[a].timestamp
  );
  return {
    unansweredQuestions: Object.keys(question)
      .filter((qid) => !commented.includes(qid))
      .sort((a, b) => question[b].timestamp - question[a].timestamp),
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
