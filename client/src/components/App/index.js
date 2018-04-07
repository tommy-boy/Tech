import React from 'react'
import SurveyTemplate from '../SurveyTemplate'
import { MuiThemeProvider } from 'material-ui/styles';
import { survey } from '../../themes'

const App = () => {    
    return (
        <MuiThemeProvider muiTheme={survey}>
            <SurveyTemplate />
        </MuiThemeProvider>
    )
}

export default App
