import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Link, Routes, Route } from 'react-router-dom';
import {
  Box,
  IconButton,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';

// Pages
import WhatIsPython from './pages/Introduction/WhatIsPython';
import HelloWorld from './pages/Introduction/HelloWorld';
import Comment from './pages/Introduction/Comment';
import Quiz from './pages/Quiz/Quiz';
import Variable from './pages/Variables/Variable';
import DataTypes from './pages/DataTypes/DataTypes';
import ArithmeticOps from './pages/ArithmeticOps/ArithmeticOps';
import ConditionalStatements from './pages/ConditionalStatements/ConditionalStatements';
import ForLoop from './pages/ForLoop/ForLoop';
import WhileLoop from './pages/WhileLoop/WhileLoop';

function NavBar() {
  return (
    <nav style={{ color: 'red' }}>
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/intro/whatispython">What is Python</Link>
        </li>
        <li>
          <Link to="/intro/helloworld">Hello, World!</Link>
        </li>
        <li>
          <Link to="/intro/comment">Comment</Link>
        </li>
        <li>
          <Link to="/variables">Variables</Link>
        </li>
        <li>
          <Link to="/datatypes">Data Types</Link>
        </li>
        <li>
          <Link to="/arithmeticops">Arithmetic Ops</Link>
        </li>
        <li>
          <Link to="/conditionals">Conditional Statements</Link>
        </li>
        <li>
          <Link to="/forloop">For Loop</Link>
        </li>
        <li>
          <Link to="/whileloop">While Loop</Link>
        </li>
        <li>
          <Link to="/quiz">Quiz</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
    typography: {
      fontFamily: ['Rubik', 'Arial', 'sans-serif'].join(','),
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* NavBar is for dev purposes */}
        <Box
          sx={{
            border: '2px red solid',
            position: 'absolute',
            top: '48px',
            right: '36px',
          }}
        >
          <NavBar />
        </Box>

        {/* Toggle Light/Dark Mode */}
        <IconButton
          sx={{ position: 'fixed', top: 0, right: 0 }}
          color="inherit"
          onClick={handleToggleTheme}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/intro/whatispython" element={<WhatIsPython />} />
          <Route path="/intro/helloworld" element={<HelloWorld />} />
          <Route path="/intro/comment" element={<Comment />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/variables" element={<Variable />} />
          <Route path="/datatypes" element={<DataTypes />} />
          <Route path="/arithmeticops" element={<ArithmeticOps />} />
          <Route path="/conditionals" element={<ConditionalStatements />} />
          <Route path="/forloop" element={<ForLoop />} />
          <Route path="/whileloop" element={<WhileLoop />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
