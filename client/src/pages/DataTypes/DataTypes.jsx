import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  List,
  ListItem,
} from '@mui/material';
import dataTypesList from './basicDataTypes';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import Proceed from '../../components/Proceed';

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
              color: '#0b3c53',
              cursor: 'default',
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
                    {'‣ '}
                    {example}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

function DataTypes() {
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
        DATA TYPES
      </Typography>
      <Typography variant="h2">Basic Data Types</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          In Python, there are several different kinds of data, or "types", that
          you can work with. Some of the most common ones include:
        </Typography>

        {/* Data Types List */}
        <DataTypesList />

        <Typography>
          These data types are fundamental building blocks of Python programs
          and are used extensively in many different applications. In addition
          to these basic data types, Python also has more complex data types
          such as lists, tuples, dictionaries, sets, and more. But that’s a
          topic for another time 😊
        </Typography>

        {/* type() */}
        <Typography mt="4rem" textAlign="center" variant="h3">
          The <code>type()</code> Function
        </Typography>

        <Typography sx={{ mt: '2rem', mb: '1rem' }}>
          In Python, you can check of the type of the value by using the
          built-in function <code>type()</code>.{' '}
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`print(type("hello")) 
# prints out <class 'str'>, meaning "hello" is a string

print(type(3.14)) 
# prints out <class 'float'>, meaning 3.14 is a float

print(type(True)) 
# prints out <class 'bool'>, meaning True is a boolean`}
            height="300px"
            width="75%"
            title="true"
          />
          <CodeOutput
            content={`<class 'str'>\n<class 'float'>\n<class 'bool'>`}
            height="300px"
            width="25%"
            title="true"
          />
        </Box>
      </Box>
      <Proceed linkTo="/variables" />
    </Container>
  );
}

export default DataTypes;
