import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import SurveyTemplate from './components/SurveyTemplate'
import SurveyPositiveFeedback from './components/SurveyPositiveFeedback'
import SurveyNegativeFeedback from './components/SurveyNegativeFeedback'
import SurveyThankYou from './components/SurveyThankYou'

export default ({ childProps }) =>

  <Switch>
    <Route path="/:id" component={SurveyTemplate} />
    <Route path="/plus" component={SurveyPositiveFeedback} />
    <Route path="/minus" component={SurveyNegativeFeedback} />
    <Route path="/thankyou" component={SurveyThankYou} />
    <Route render={() => <h1>Page not found</h1>} />
  </Switch>
;
