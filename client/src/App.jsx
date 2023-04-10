import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import {
  IconButton,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

import { Brightness4, Brightness7 } from '@mui/icons-material';
// import { blue } from '@mui/material/colors';

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

        <IconButton
          sx={{ position: 'fixed' }}
          color="inherit"
          onClick={handleToggleTheme}
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
