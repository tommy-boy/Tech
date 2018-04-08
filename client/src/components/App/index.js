import React from 'react'
import { MuiThemeProvider } from 'material-ui/styles';
import { survey } from '../../themes'
import { Route, Switch } from 'react-router-dom'
import SurveyTemplate from '../SurveyTemplate'
import SurveyPositiveFeedback from '../SurveyPositiveFeedback'
import SurveyNegativeFeedback from '../SurveyNegativeFeedback'

const App = () => {    
    return (
        <MuiThemeProvider theme={survey}>
            <Switch>
                <Route path="/" component={SurveyTemplate} />
                <Route path="/plus/" component={SurveyPositiveFeedback} />
                <Route path="/minus/" component={SurveyNegativeFeedback} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </MuiThemeProvider>
    )
}

export default App
