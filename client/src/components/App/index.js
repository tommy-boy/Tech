import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles';
import { survey } from '../../themes'
import SurveyTemplate from '../SurveyTemplate'
import SurveyPositiveFeedback from '../SurveyPositiveFeedback'
import SurveyNegativeFeedback from '../SurveyNegativeFeedback'
import SurveyThankYou from '../SurveyThankYou'

const App = () => {   
    return (
        <Router>
        <MuiThemeProvider theme={survey}>
            <Switch>
                <Route exact={true} path="/" render={({match}) => (
                    <SurveyTemplate />
                )} />
                <Route exact={true} path="/plus" render={({match}) => (
                    <SurveyPositiveFeedback/>
                )} />
                 <Route exact={true} path="/minus" render={({match}) => (
                    <SurveyNegativeFeedback/>
                )} />
                <Route exact={true} path="/thankyou" render={({match}) => (
                    <SurveyThankYou/>
                )} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </MuiThemeProvider>
        </Router>
    )
}

export default App
