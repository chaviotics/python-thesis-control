import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

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
        VARIABLES
      </Typography>
      <Typography variant="h2">Variables</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography>
          A variable in Python is like a box where you can store values. Think
          of it like a label for the data you put inside. To create a variable,
          you give it a name and assign a value to it using the equals sign (=).
          For example:
        </Typography>
      </Box>
    </Container>
  );
}

function CodeVarExample() {
  const code = `age = 10
name = "Alice"
`;

  return (
    <Container>
      <Box sx={{ height: '180px', mt: '1.2rem' }}>
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

      <NoteForScroll />

      <Typography mt="2rem">
        When you assign a value to a variable, Python{' '}
        <strong>
          automatically determines the data type based on the value you provide.
        </strong>{' '}
        For example, if you assign a number to a variable, it will be of type
        integer or float. If you assign text to a variable, it will be of type
        string.
      </Typography>
    </Container>
  );
}

function CodeTypeExample() {
  const code = `print(type(age))
print(type(name))
`;
  return (
    <Container sx={{ mt: '2rem' }}>
      <Typography mb="0.8rem">
        You can use the <code>type()</code> function to find out the data type
        of a variable or a value. For example:
      </Typography>

      {/* Code Editor */}
      <Box sx={{ height: '150px' }}>
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

      {/* Output Box */}
      <Box mt="2rem">
        <Typography mt="1rem" mb="0.8rem">
          This would output:
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
          <Typography fontFamily="monospace">{`<class 'int'>`}</Typography>
          <Typography fontFamily="monospace">{`<class 'str'>`}</Typography>
        </Box>
      </Box>
    </Container>
  );
}

function Variable() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroHeading />
      <CodeVarExample />
      <CodeTypeExample />
      <Proceed linkTo="/arithmeticops" />
    </Container>
  );
}

export default Variable;
