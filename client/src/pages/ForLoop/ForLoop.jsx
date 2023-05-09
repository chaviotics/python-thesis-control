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
        LOOPS
      </Typography>
      <Typography variant="h2">For Loop</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta dolorum
          commodi dolore velit atque modi quam error beatae autem sequi
          reiciendis obcaecati, omnis eaque, aliquid, repellendus molestiae?
          Animi, ratione itaque.
        </Typography>
      </Box>
    </Container>
  );
}

function CodeEditor() {
  const code = `y = "hello"
print(type(y)) # prints out <class 'str'>, meaning y is a string

z = 3.14
print(type(z)) # prints out <class 'float'>, meaning z is a float

w = True
print(type(w)) # prints out <class 'bool'>, meaning w is a boolean
`;

  return (
    <Box sx={{ height: '340px' }}>
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

function ForLoop() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroHeading />

      <Proceed linkTo="/functions" />
    </Container>
  );
}

export default ForLoop;
