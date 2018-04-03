import React, { Component}  from 'react';
import { Route, Switch } from "react-router-dom";
import asyncRoute from "./components/AsyncRoute";
import asyncComponent from "./components/AsyncComponent";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const AsyncSurvey = Loadable({
    loader: () => import("./containers/SurveyContainer"),
    loading: MyLoadingComponent
});
/* const AsyncPositiveFeedback = asyncComponent(() => import("./containers/SurveyPositiveFeedbackContainer"));
const AsyncNegativeFeedback = asyncComponent(() => import("./containers/SurveyNegativeFeedbackContainer"));
const AsyncThankYou = asyncComponent(() => import("./containers/SurveyThankYouContainer")); */
const AsyncNotFound = asyncComponent(() => import("./containers/NotFound"));

export default ({ childProps }) =>
  <Switch>
    <Route
      path="/"
      exact
      component={AsyncSurvey}
      props={childProps}
    />    
    {/* <Route
      path="/SurveyPositiveFeedback"
      exact
      component={AsyncPositiveFeedback}
      props={childProps}
    />
    <Route
      path="/SurveyNegativeFeedback"
      exact
      component={AsyncNegativeFeedback}
      props={childProps}
    />
    <Route
      path="/SurveyThankYou"
      exact
      component={AsyncThankYou}
      props={childProps}
    /> */}
    {/* catch all unmatched routes */}
    <Route component={AsyncNotFound} />
  </Switch>
;