import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Navigation from './Navigation';
import Router from './Router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontSize: 14,
    body1: {
      fontSize: 14,
      '@media print': {
        fontSize: 10
      }
    },
    body2: {
      fontSize: 12,
      '@media print': {
        fontSize: 8
      }
    },
    subtitle1: {
      fontSize: 16,
      '@media print': {
        fontSize: 12
      },
      fontWeight: '500',
    },
    subtitle2: {
      fontSize: 14,
      '@media print': {
        fontSize: 10
      },
      fontWeight: 'normal',
      fontStyle: 'italic'
    },
    h6: {
      marginTop: 16,
      '@media print': {
        marginTop: 8
      }
    },
    h5: {
      marginTop: 16,
      '@media print': {
        marginTop: 8
      }
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navigation />
      <Router />
    </ThemeProvider>
  );
}

export default App;
