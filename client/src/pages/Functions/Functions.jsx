import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';
import Proceed from '../../components/Proceed';

function MainContent() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Title */}
      <Typography variant="h4" fontWeight="bold">
        FUNCTIONS
      </Typography>
      <Typography variant="h2">Functions</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Functions are a way to group a block of code that can be reused
          multiple times throughout your program. Functions are essential to
          code reusability, as they allow you to avoid writing the same code
          over and over again.
        </Typography>

        {/* Syntax */}
        <Typography variant="h4" fontWeight="bold" mt="2rem">
          Syntax
        </Typography>

        <Typography>The syntax of a function looks like this:</Typography>
        <Code
          code={`def function_name(parameter1, parameter2):
    # code to be executed
    return result`}
          height="200px"
          width="100%"
        />

        {/*  */}

        {/*  */}

        {/*  */}
      </Box>
    </Container>
  );
}

function Code(props) {
  const code = props.code;

  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>

      <Box sx={{ height: props.height }}>
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
    </Box>
  );
}

function CodeOutput(props) {
  const output = props.output;
  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: props.height,
          border: '1px solid #ccc',
          borderRadius: '4px',
          minHeight: '120px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography
          fontFamily="monospace"
          component="div"
          sx={{ whiteSpace: 'pre-line' }}
        >
          {output}
        </Typography>
      </Box>
    </Box>
  );
}

function Functions() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />

      <Proceed linkTo="/quiz" />
    </Container>
  );
}

export default Functions;
