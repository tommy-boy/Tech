import React from 'react'
import SurveyTemplate from '../SurveyTemplate'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme(theme);

const App = () => {    
    return (
        <MuiThemeProvider muiTheme={theme}>
            <SurveyTemplate />
        </MuiThemeProvider>
    )
}

export default App