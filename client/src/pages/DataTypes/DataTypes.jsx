import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';
import dataTypesList from './basicDataTypes';

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
        DATA TYPES
      </Typography>
      <Typography variant="h2">Basic Data Types</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography>
          In Python, there are several different kinds of data, or "types", that
          you can work with. Some of the most common ones include:
        </Typography>
      </Box>
    </Container>
  );
}

function DataTypesList() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: '2rem',
      }}
    >
      <Box
        sx={{
          alignSelf: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 400px)',
          // gridAutoRows: '300px',
          gap: '32px',
          mb: 7,
        }}
      >
        {dataTypesList.map((dataType) => (
          <Paper
            key={dataType.id}
            elevation={5}
            sx={{
              p: '3rem',
              transition: 'all 0.2s',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            <Typography
              mb="1rem"
              textAlign="center"
              variant="h5"
              fontWeight="bold"
            >
              {dataType.type}
            </Typography>
            <Typography mb="0.8rem" textAlign="justify">
              {dataType.description}
            </Typography>
            <Typography variant="h6">Examples: </Typography>

            <List>
              {dataType.examples.map((example, index) => (
                <ListItem key={index}>
                  <Typography>
                    {'➤ '}
                    {example}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Box>
      <Typography>
        These data types are fundamental building blocks of Python programs and
        are used extensively in many different applications. In addition to
        these basic data types, Python also has more complex data types such as
        lists, tuples, dictionaries, sets, and more. But that’s another topic
        for another time 😊
      </Typography>
    </Container>
  );
}

function CodeEditor() {
  const code = `print(type("hello")) # prints out <class 'str'>, meaning "hello" is a string

print(type(3.14)) # prints out <class 'float'>, meaning 3.14 is a float

print(type(True)) # prints out <class 'bool'>, meaning True is a boolean`;

  return (
    <Box sx={{ height: '220px' }}>
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

function TypeFunc() {
  return (
    <Container>
      <Typography mt="7rem" textAlign="center" variant="h2">
        <code>type()</code> Function
      </Typography>
      <Typography sx={{ mt: '2rem', mb: '1rem' }}>
        In Python, you can check of the type of the value by using the built-in
        function <code>type()</code>.{' '}
      </Typography>
      <CodeEditor />
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
        to="/variables"
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

function DataTypes() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroHeading />
      <DataTypesList />
      <TypeFunc />
      <Proceed />
    </Container>
  );
}

export default DataTypes;
