import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

function Comment() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Title */}
      <Typography variant="h4" fontWeight="bold">
        INTRODUCTION
      </Typography>
      <Typography variant="h2">Commenting</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Comments in Python are notes that you add to your code to explain what
          it does. They are ignored by the computer when the code is ran, but
          they help you and others understand what your code is doing.
        </Typography>
        <Typography mt="2rem" mb="1rem">
          In Python, you can add a comment by starting a line with the{' '}
          <code>#</code> symbol. Everything after the <code>#</code> symbol on
          that line will be treated as a comment. Check out the code editor
          below:
        </Typography>
      </Box>

      <CodeEditor
        content={`# This is a comment
# It won't be run by the computer
# But it can help explain what's going on

# For example:

print("Hello awesome person!") # This line prints a greeting to the console
`}
        height="250px"
        width="100%"
      />

      {/* Space */}
      <Typography mt="1rem"></Typography>

      <NoteForScroll />

      <Proceed linkTo="/datatypes" />
    </Container>
  );
}

export default Comment;
