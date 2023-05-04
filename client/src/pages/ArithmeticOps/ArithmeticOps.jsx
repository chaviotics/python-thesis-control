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

const operations = [
  { id: 1, operation: `Addition (+)` },
  { id: 2, operation: `Subtraction (-)` },
  { id: 3, operation: `Multiplication (*)` },
  { id: 4, operation: `Division (/)` },
  { id: 5, operation: `Floor Division (//)` },
  { id: 6, operation: `Modulo (%)` },
  { id: 7, operation: `Exponentiation (**)` },
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
              {'➤ '}
              {op.operation}
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
      <Typography mt="1rem" mb="1rem">
        Here are some examples of how to perform these operations:
      </Typography>
      <Box sx={{ height: '640px' }}>
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
        to="/conditionals"
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
      <Proceed />
    </Container>
  );
}

export default ArithmeticOps;
