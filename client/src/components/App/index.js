import React from 'react'
import { Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles';
import { survey } from '../../themes'
import SurveyTemplate from '../SurveyTemplate'

const App = () => {    
    return (
        <MuiThemeProvider theme={survey}>
            <SurveyTemplate />
        </MuiThemeProvider>
    )
}

export default App
