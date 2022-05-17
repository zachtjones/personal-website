import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Box, Container, Link, Stack, Toolbar } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position='static'>
        <Container maxWidth='xl' sx={{ m: 0.5 }}>
          <Toolbar disableGutters>
            <div style={{ width: '100%' }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
                alignItems: 'center'
              }}>
                <Link href="/" color="inherit" underline="hover">
                  <HomeIcon />
                </Link>

                <Link href="#" color="inherit" underline="hover">
                  About
                </Link>

                <Link href="#" color="inherit" underline="hover">
                  Projects
                </Link>

                <Link href="mailto:zachary_jones@intuit.com" color="inherit" underline="hover">
                  <MailIcon />
                </Link>
              </Box>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Box sx={{ p: 1, m: 1 }}>
        <p>hello, world!</p>
      </Box>
    </ThemeProvider>
  );
}

export default App;
