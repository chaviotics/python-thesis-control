import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Editor from '@monaco-editor/react';
import { Link } from 'react-router-dom';

function IntroHeading() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        INTRODUCTION
      </Typography>
      <Typography variant="h2">Hello, World!</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography>
          Learning a new language wouldn’t feel right if you don’t print“Hello
          World!” Here’s how you can do it in Python:
        </Typography>
      </Box>
    </Container>
  );
}

function CodeEditor() {
  const code = "print('Hello, World')\nprint(1+2)\nprint(False)";
  return (
    <Box sx={{ height: '120px' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '20px',
          readOnly: true,
        }}
      />
    </Box>
  );
}

function OutputBox() {
  return (
    <Box>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          border: '1px solid #ccc',
          borderRadius: '4px',
          minHeight: '120px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography>Hello, World!</Typography>
        <Typography>3</Typography>
        <Typography>False</Typography>
      </Box>
    </Box>
  );
}

function IDE() {
  return (
    <Container sx={{ mt: '0.5rem', display: 'flex', flexDirection: 'row' }}>
      <Box sx={{ width: '50%', mr: '2rem' }}>
        <CodeEditor />
      </Box>
      <Box sx={{ width: '50%' }}>
        <OutputBox />
      </Box>
    </Container>
  );
}

function PrintExplanation() {
  return (
    <Container>
      <Typography>
        {' '}
        <Typography pt="3.6rem">
          The <code>print()</code> function is used to output text or data to
          the console or terminal. It's a simple and powerful tool that can be
          used to display information, debug code, and communicate with the
          user.
        </Typography>
      </Typography>
    </Container>
  );
}

function Proceed() {
  const handleProceed = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        component={Link}
        sx={{ alignSelf: 'center', width: '25%', mt: '5rem' }}
        size="large"
        variant="contained"
        to="/intro/comment"
        onClick={handleProceed}
      >
        Proceed
      </Button>
      <Typography
        sx={{
          fontSize: 'small',
          fontStyle: 'italic',
          textAlign: 'center',
          mt: '.5rem',
          mb: '7rem',
        }}
      >
        Note: You cannot go back to the previous page once you proceed to the
        next.
      </Typography>
    </Box>
  );
}

function HelloWorld() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroHeading />
      <IDE />
      <PrintExplanation />
      <Proceed />
    </Container>
  );
}

export default HelloWorld;
