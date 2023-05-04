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
      <Typography variant="h2">Commenting</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography>
          Comments in Python are notes that you add to your code to explain what
          it does. They are ignored by the computer when the code is run, but
          they help you and others understand what your code is doing.
        </Typography>
        <Typography mt="2rem">
          In Python, you can add a comment by starting a line with the # symbol.
          Everything after the # symbol on that line will be treated as a
          comment. Check out the code editor below:
        </Typography>
      </Box>
    </Container>
  );
}

function CodeEditor() {
  const code = `# This is a comment
# It won't be run by the computer
# But it can help explain what's going on

# For example:

print("Hello awesome person!") # This line prints a greeting to the console
`;

  return (
    <Box sx={{ height: '100%' }}>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '20px',
          readOnly: true,
          scrollBeyondLastLine: false,
        }}
      />
    </Box>
  );
}

function IDE() {
  return (
    <Container sx={{ mt: '1rem', display: 'flex', flexDirection: 'row' }}>
      <Box width={'100%'} height={'250px'}>
        <CodeEditor />
      </Box>
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
        to="/datatypes"
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
        next. <br />
        Please take your time and review the material carefully before moving
        forward.
      </Typography>
    </Box>
  );
}

function Comment() {
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
      <Proceed />
    </Container>
  );
}

export default Comment;
