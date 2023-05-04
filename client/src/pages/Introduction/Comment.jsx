import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';
import Proceed from '../../components/Proceed';

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

function NoteForScroll() {
  return (
    <Container>
      <Typography fontSize="75%" mt="2rem" fontStyle="italic">
        Note: If you're having trouble scrolling down, place your mouse cursor
        outside the code editor and scroll as normal.
      </Typography>
    </Container>
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
      <NoteForScroll />
      <Proceed linkTo="/datatypes" />
    </Container>
  );
}

export default Comment;
