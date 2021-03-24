import './App.css';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import blue from '@material-ui/core/colors/blue';
import AppBarComponent from './Components/AppBarComponent';
import React from 'react';
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[200],
    },
    secondary: {
      main: purple[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBarComponent/>
      <Container maxWidth="lg">
      </Container>
    </ThemeProvider>
  );
}

export default App;
