import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import CreateQuestion from "./CreateQuestion";

import ErrorPage from "./ErrorPage";
import QuestionInfo from "./QuestionInfo";

function Routes(props) {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/add" exact component={CreateQuestion} />
        <Route path="/questions/:id" exact component={QuestionInfo} />
        <Route path="*" exact component={ErrorPage} />
      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedOn: PropTypes.any };

export default Routes;
