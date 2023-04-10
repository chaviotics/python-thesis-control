import HomePage from './pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blue } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[800],
    },
    background: {
      default: '#0A192F',
      paper: '#172A45',
    },
    text: {
      primary: '#ffffff',
      secondary: '#B0BEC5',
    },
  },
  typography: {
    fontFamily: ['Rubik', 'Arial', 'sans-serif'].join(','),
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
