import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
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
        {/* Shorthand Operators */}
        <Typography mt="4rem" textAlign="center" variant="h3">
          Shorthand Operators
        </Typography>

        <Typography mt="2rem" mb="1rem">
          In Python, shorthand operators are used to combine an arithmetic
          operation and an assignment in a single step. They are useful for
          writing more concise and readable code.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          For example, instead of writing:
        </Typography>

        <CodeEditor content={`x = x + 2\n`} height="75px" width="100%" />

        <Typography mt="2rem" mb="1rem">
          We can use the shorthand operator <code>+=</code> to write:
        </Typography>

        <CodeEditor content={`x += 2\n`} height="75px" width="100%" />

        <Typography mt="2rem" mb="1rem">
          This performs the same operation as the first example, but in a more
          concise way. Here are some more examples of shorthand operators in
          Python:
        </Typography>

        <CodeEditor
          content={`x -= 3   # same as x = x - 3
y *= 4   # same as y = y * 4
z /= 2   # same as z = z / 2
`}
          height="150px"
          width="100%"
        />

        {/* Examle */}

        <Typography mt="4rem" mb="1rem">
          Let's now give a concrete example. Consider the following code:
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
            content={`x = 5
x += 3 # shorthand operator for x = x + 3

print(x)
`}
            height="150px"
            width="60%"
            title="true"
          />

          <CodeOutput content={`8`} height="150px" width="40%" title="true" />
        </Box>

        <Typography mt="2rem">
          In this example, the <code>+=</code> operator is used to add the value
          3 to the variable <code>x</code>. The result is 8, which is then
          assigned back to the variable <code>x</code>. When the code is
          executed, the output will be 8.
        </Typography>

        <Typography mt="4rem">Here are other examples:</Typography>

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
            content={`y = 10
y -= 5  # shorthand operator for y = y - 5
print(y)  # Output: 5

z = 2
z *= 3 # shorthand operator for z = z * 3
print(z)  # Output: 6
`}
            height="250px"
            width="60%"
            title="true"
          />

          <CodeOutput
            content={`5\n6`}
            height="250px"
            width="40%"
            title="true"
          />
        </Box>

        <Typography fontStyle="italic" mt="4rem">
          We will be using more of shorthand operators in later part of this
          tutorial.
        </Typography>

        {/*  */}
      </Box>

      <Proceed linkTo="/conditionals" />
    </Container>
  );
}

export default ArithmeticOps;
