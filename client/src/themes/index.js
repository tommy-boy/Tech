import { createTheme } from '../utils/theme'

export const survey = createTheme({
  palette: {
    primary: {
        light: '#ff903b',
        main: '#094AA8',
        dark: '#a43100',
        contrastText: '#000000',
    },
    secondary: {
        light: '#797979',
        main: '#4d4d4d',
        dark: '#252525',
        contrastText: '#ffffff'
    },
    error: {
      light: '#E57373',
      main: '#F44336',
      dark: '#D32F2F',
      contrastText: '#F44336',
    },
  },
  overrides: {
    MuiInput: {
      underline: {
        '&:before': {
          backgroundcolor: '#094AA8'
        },
        '&:hover:not($disabled):before': { 
          backgroundColor: '#0d6cf2',
        },
      }
    }
  },
  status: {
    danger: 'orange',
  },
});


