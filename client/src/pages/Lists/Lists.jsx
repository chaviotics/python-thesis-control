import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

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
      {/* Intro */}
      <Typography variant="h4" fontWeight="bold">
        Data Structures
      </Typography>
      <Typography variant="h2">Lists</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography mb="1rem">
          A list in Python is an ordered collection of items, which can be of
          any type (numbers, strings, other lists, etc.). Lists are created
          using square brackets [] and items are separated by commas. The
          general syntax is:
        </Typography>
        <CodeSyntax />

        {/* List Order Example */}
        <Typography mt="2rem" mb="1rem">
          Lists are ordered, which means that the items have a defined order and
          can be accessed using an index, starting from 0 for the first item.
          The syntax for accessing a specific item in a list is:{' '}
          <code>list[index_of_element]</code>.
        </Typography>

        <Typography mb="1rem">
          Let's say we want to choose the first element of the{' '}
          <code>fruits</code> list, which is <code>apple</code>.
        </Typography>

        <CodeListOrderExample />

        {/* List Mutable Example */}

        {/*  */}
      </Box>
    </Container>
  );
}

function CodeSyntax() {
  const code = `# list = [item1, item2, item3, ...]

# for example:
fruits = ["apple", "banana", "cherry"]`;

  return (
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
  );
}

function CodeListOrderExample() {
  const code = `fruits = ["apple", "banana", "cherry"]
print(fruits[0]) # Output: apple`;

  return (
    <Box sx={{ height: '100px' }}>
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

function Lists() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />

      <Proceed />
    </Container>
  );
}

export default Lists;
