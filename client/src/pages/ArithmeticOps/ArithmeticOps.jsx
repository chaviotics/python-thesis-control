import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import Editor from '@monaco-editor/react';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

const operations = [
  { id: 1, operation: `Addition`, operator: `+` },
  { id: 2, operation: `Subtraction`, operator: `-` },
  { id: 3, operation: `Multiplication`, operator: `*` },
  { id: 4, operation: `Division`, operator: `/` },
  { id: 5, operation: `Floor Division`, operator: `//` },
  { id: 6, operation: `Modulo`, operator: `%` },
  { id: 7, operation: `Exponentiation`, operator: `**` },
];

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
          In Python, arithmetic operations are performed using the following
          operators:
        </Typography>

        <List>
          {operations.map((op) => (
            <ListItem key={op.id}>
              {'➤ '} {op.operation} {` ( `}
              <code>{op.operator}</code> {' ) '}
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
}

function CodeEditor() {
  const code = `# Addition
print(3 + 5) # Output: 8
  
# Subtraction
print(10 - 5) # Output: 5
  
# Multiplication
print(3 * 5) # Output: 15
  
# Division
print(10 / 3) # Output: 3.3333333333333335
  
# Floor Division
print(10 // 3) # Output: 3
  
# Modulo
print(10 % 3) # Output: 1
  
# Exponentiation
print(3 ** 2) # Output: 9
`;

  return (
    <Container>
      <Typography mt="1rem">
        Here are some examples of how to perform these operations:
      </Typography>
      <NoteForScroll />
      <Box sx={{ mt: '1rem', height: '640px' }}>
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
    </Container>
  );
}

function ArithmeticOps() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <IntroHeading />
      <CodeEditor />
      <Proceed linkTo="/conditionals" />
    </Container>
  );
}

export default ArithmeticOps;
