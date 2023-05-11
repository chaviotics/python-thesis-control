import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import Proceed from '../../components/Proceed';

function HelloWorld() {
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
      <Typography variant="h2">Hello, World!</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Learning a new language wouldn’t feel right if you don’t print“Hello
          World!” Here’s how you can do it in Python:
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
            content={`print('Hello, World')\nprint(1+2)\nprint(False)`}
            height="150px"
            width="50%"
            title="true"
          />

          <CodeOutput
            content={`Hello, World!\n3\nFalse`}
            height="150px"
            width="50%"
            title="true"
          />
        </Box>

        <Typography pt="2rem">
          The <code>print()</code> function is used to output text or data to
          the console or terminal. It's a simple and powerful tool that can be
          used to display information, debug code, and communicate with the
          user.
        </Typography>
      </Box>

      <Proceed linkTo="/intro/comment" />
    </Container>
  );
}

export default HelloWorld;
