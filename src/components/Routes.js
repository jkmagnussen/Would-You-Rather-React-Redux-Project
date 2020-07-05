import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import CreateQuestion from "./CreateQuestion";

import Login from "./Login";
import ErrorPage from "./ErrorPage";
import QuestionInfo from "./QuestionInfo";

function Routes(props) {
  return (
    <div className="container">
      <Switch>
        {props.notLoggedOn ? (
          <Route path="/" exact component={Login} />
        ) : (
          <Fragment>
            <Route path="/" exact component={Dashboard} />
            <Route path="/leaderboard" exact component={Leaderboard} />
            <Route path="/add" component={CreateQuestion} />
            <Route path="/questions/:id" component={QuestionInfo} />
          </Fragment>
        )}
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedOn: PropTypes.any };

export default Routes;
