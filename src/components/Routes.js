import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import Leaderboard from "./Leaderboard";
import CreateQuestion from "./CreateQuestion";
import Dashboard from "./Dashboard/Dashboard.js";
import CoveredPost from "./CoveredPost/CoveredPost"
import ErrorPage from "./ErrorPage/ErrorPage.js";
import ViewProfile from "./ProfilePage/ViewProfile/ViewProfile.js";
import QuestionInfo from "./QuestionInfo";
import EditProfile from "./ProfilePage/EditProfile/EditProfile";

function Routes(props) {
  return (
    <div className="container">
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/profile" exact component={ViewProfile} />
        <Route parh ="/editProfile" exact component={EditProfile} />
        <Route path="/coveredpost" exact component={CoveredPost} />

        <Route path="/leaderboard" exact component={Leaderboard} />
        <Route path="/add" exact component={CreateQuestion} />
        <Route path="/questions/:id" exact component={QuestionInfo} />

      </Switch>
    </div>
  );
}

Routes.propTypes = { notLoggedOn: PropTypes.any };

export default Routes;
