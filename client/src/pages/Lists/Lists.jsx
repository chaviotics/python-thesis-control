import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

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

        <NoteForScroll />

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

      <Proceed linkTo="/forloop" />
    </Container>
  );
}

export default Lists;
