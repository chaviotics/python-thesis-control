import { useState } from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import {
  Button,
  Box,
  IconButton,
  createTheme,
  CssBaseline,
  ThemeProvider,
  List,
  ListItem,
  Typography,
} from '@mui/material';

// Pages
import HomePage from './pages/HomePage/HomePage';
import WhatIsPython from './pages/Introduction/WhatIsPython';
import HelloWorld from './pages/Introduction/HelloWorld';
import Comment from './pages/Introduction/Comment';
import Quiz from './pages/Quiz/Quiz';
import DataTypes from './pages/DataTypes/DataTypes';
import Variable from './pages/Variables/Variable';
import ArithmeticOps from './pages/ArithmeticOps/ArithmeticOps';
import ConditionalStatements from './pages/ConditionalStatements/ConditionalStatements';
import Lists from './pages/Lists/Lists';
import WhileLoop from './pages/WhileLoop/WhileLoop';
import ForLoop from './pages/ForLoop/ForLoop';
import Functions from './pages/Functions/Functions';

import BackTooltip from './components/BackTooltip';

function NavBar() {
  const linkFontColor = '#fff';
  const linkFontColorHover = '#ccc';
  return (
    <Box
      sx={{
        border: '2px white solid',
        position: 'fixed',
        top: '56px',
        right: '18px',
        pr: '1rem',
        backgroundColor: '#3081c3',
      }}
    >
      <List>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/"
          >
            Main
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/intro/whatispython"
          >
            What is Python
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/intro/helloworld"
          >
            Hello, World!
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/intro/comment"
          >
            Comment
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/datatypes"
          >
            Data Types
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/variables"
          >
            Variables
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/arithmeticops"
          >
            Arithmetic Ops
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/conditionals"
          >
            Conditional Statements
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/lists"
          >
            Lists
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/whileloop"
          >
            While Loop
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/forloop"
          >
            For Loop
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: linkFontColorHover, transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/functions"
          >
            Functions
          </Typography>
        </ListItem>
        <ListItem sx={{ py: '0' }}>
          <Typography
            sx={{
              color: linkFontColor,
              textDecoration: 'none',
              '&:hover': { color: '#FFBF00', transform: 'scale(1.1)' },
            }}
            component={Link}
            to="/quiz"
          >
            Quiz
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
}

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  const toggleNavBar = () => {
    setShowNavBar(!showNavBar);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#3e96d3',
      },
      secondary: {
        main: '#3081c3',
      },
      text: {
        primary: '#e7ecef',
        secondary: '#040404',
      },
      background: {
        default: '#0b3c53',
      },
    },

    typography: {
      fontFamily: ['Rubik', 'Arial', 'sans-serif'].join(','),
      body1: {
        fontSize: '1.2rem',
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BackTooltip />

        {/* NavBar is for dev purposes */}
        <Box sx={{ position: 'fixed', right: '0', top: '0', zIndex: '5' }}>
          <Button size="large" variant="contained" onClick={toggleNavBar}>
            {showNavBar ? 'Hide NavBar' : 'Show NavBar'}
          </Button>
          {showNavBar && <NavBar />}
          {/* rest of your code */}
        </Box>
        {/* <NavBar /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro/whatispython" element={<WhatIsPython />} />
          <Route path="/intro/helloworld" element={<HelloWorld />} />
          <Route path="/intro/comment" element={<Comment />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/datatypes" element={<DataTypes />} />
          <Route path="/variables" element={<Variable />} />
          <Route path="/arithmeticops" element={<ArithmeticOps />} />
          <Route path="/conditionals" element={<ConditionalStatements />} />
          <Route path="/lists" element={<Lists />} />
          <Route path="/whileloop" element={<WhileLoop />} />
          <Route path="/forloop" element={<ForLoop />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
