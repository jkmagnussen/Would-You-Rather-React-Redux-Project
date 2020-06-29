import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import CreateQuestion from "./CreateQuestion";
import Question from "./Question";
import Logout from "./Logout";
import Login from "./Login";
import ErrorPage from "./ErrorPage";

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
            <Route path="/questions/:id" component={Question} />
            <Route exact path="/logout" component={Logout} />
          </Fragment>
        )}
        <Route component={ErrorPage} />
      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedOn: PropTypes.any };

export default Routes;
