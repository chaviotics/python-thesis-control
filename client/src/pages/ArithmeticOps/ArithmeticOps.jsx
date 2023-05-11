import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
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

function ArithmeticOps() {
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
        ARITHMETIC OPERATIONS
      </Typography>
      <Typography variant="h2">Arithmetic Operations</Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          In Python, arithmetic operations are performed using the following
          operators:
        </Typography>
        {/* Operators List */}
        <List>
          {operations.map((op) => (
            <ListItem key={op.id}>
              <Typography>
                {'‣ '} {op.operation} {` ( `}
                <code>{op.operator}</code> {' ) '}
              </Typography>
            </ListItem>
          ))}
        </List>
        {/* Examples in Code Editor */}
        <Typography mt="2rem">
          Here are some examples of how to perform these operations:
        </Typography>

        <NoteForScroll />

        {/* Space */}
        <Typography mt="1rem"></Typography>

        <CodeEditor
          content={`# Addition
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
`}
          height="620px"
          width="100%"
        />
      </Box>

      <Proceed linkTo="/conditionals" />
    </Container>
  );
}

export default ArithmeticOps;
