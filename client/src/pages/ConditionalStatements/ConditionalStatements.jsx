import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

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
        ARITHMETIC OPERATIONS
      </Typography>
      <Typography variant="h2">Arithmetic Operations</Typography>

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
        to="/forloop"
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

function ConditionalStatements() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroHeading />

      <Proceed />
    </Container>
  );
}

export default ConditionalStatements;
