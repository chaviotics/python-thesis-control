import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import Proceed from '../../components/Proceed';

function Variable() {
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
        VARIABLES
      </Typography>
      <Typography variant="h2">Variables</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          A variable in Python is like a box where you can store values. Think
          of it like a label for the data you put inside. To create a variable,
          you give it a name and assign a value to it using the equals sign (=).
          For example:
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
            content={`age = 10
print(age)

name = "Alice"
print(name)`}
            height="220px"
            width="50%"
            title="true"
          />

          <CodeOutput
            content={`10\nAlice`}
            height="220px"
            width="50%"
            title="true"
          />
        </Box>

        <Typography mt="2rem">
          When you assign a value to a variable, Python{' '}
          <strong>
            automatically determines the data type based on the value you
            provide.
          </strong>{' '}
          For example, if you assign a number to a variable, it will be of type
          integer or float. If you assign text to a variable, it will be of type
          string.
        </Typography>

        {/* Using type() */}
        <Typography mt="4rem" mb="1rem">
          You can use the <code>type()</code> function to find out the data type
          of a variable or a value. For example:
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
            content={`age = 10
print(type(age))

name = "Alice"
print(type(name))`}
            height="220px"
            width="50%"
            title="true"
          />

          <CodeOutput
            content={`<class 'int'>\n<class 'str'>`}
            height="220px"
            width="50%"
            title="true"
          />
        </Box>
      </Box>

      <Proceed linkTo="/arithmeticops" />
    </Container>
  );
}

export default Variable;
