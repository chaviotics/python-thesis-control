import React from 'react';
import { Box, Container, Typography, List, ListItem } from '@mui/material';
import Editor from '@monaco-editor/react';
import Proceed from '../../components/Proceed';

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
      {/* Title */}
      <Typography variant="h4" fontWeight="bold">
        FUNCTIONS
      </Typography>
      <Typography variant="h2">Functions</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography mb="1rem">
          Functions are a way to group a block of code that can be reused
          multiple times throughout your program. Functions are essential to
          code reusability, as they allow you to avoid writing the same code
          over and over again. The syntax of a function looks like this:
        </Typography>

        {/* Syntax */}

        <Code
          code={`def function_name(parameter1, parameter2):
    # code to be executed
    # take note of the indentation
    return result
    `}
          height="200px"
          width="100%"
        />

        <Typography variant="h5" mt="1rem">
          Notes:
        </Typography>
        <List>
          <ListItem>
            <Typography>
              ‣ <code>def</code> keyword is used to define a function.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>function_name</code> is the name of the function you are
              defining.
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>parameter1</code> and <code>parameter2</code> are the
              input values that the function accepts (they are optional).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ The code to be executed is written inside the function (you can
              use any Python statements here).
            </Typography>
          </ListItem>
          <ListItem>
            <Typography>‣ Take note of the indentation</Typography>
          </ListItem>
          <ListItem>
            <Typography>
              ‣ <code>return</code> statement is used to return a value from the
              function (it is optional).
            </Typography>
          </ListItem>
        </List>

        {/* Arguments and Paramaters */}
        <Typography variant="h4" mt="2rem" mb="1rem">
          Arguments and Parameters
        </Typography>
        <Typography mb="1rem">
          Parameters are the inputs that the function can accept, while
          arguments are the actual values passed to the function when it is
          called. In the example below, a and b are parameters while{' '}
          <code>1</code> and <code>2</code> are the arguments:
        </Typography>
        <Code
          code={`def add_numbers(a, b):
    return a + b

result = add_numbers(1, 2)
print(result) # Output: 3
    `}
          height="200px"
          width="100%"
        />

        {/* Function with no return */}
        <Typography variant="h4" mt="4rem" mb="1rem">
          Functions without the <code>return</code> Statement
        </Typography>
        <Typography mb="1rem">
          If you don't want your function to return a value, you can simply omit
          the <code>return</code> statement. The example below shows a function
          that prints a message to the console:
        </Typography>
        <Code
          code={`def print_message():
    print("Hello, world!")

print_message()
# Output: Hello, world!
    `}
          height="200px"
          width="100%"
        />

        {/* Other Examples */}
        <Typography variant="h4" mt="4rem" mb="1rem">
          Other Examples
        </Typography>
        <Typography mb="1rem">
          You can use functions in conjunction with other basic Python concepts
          such as data types, variables, conditional statements, arithmetic
          operators, lists, while loops, and for loops.
        </Typography>

        {/* Example 1 */}
        <Typography variant="h5" mt="2rem" mb="1rem">
          Example 1: Using Function in a Conditional Statement:
        </Typography>
        <Code
          code={`def even_or_odd(number):
    if number % 2 == 0:
        print("The number is EVEN")
    else:
        print("The number is ODD")

even_or_odd(4) # Output: The number is EVEN`}
          height="250px"
          width="100%"
        />
        <Typography mt="1rem">
          In the example above, the function takes in a parameter{' '}
          <code>number</code>. This is used inside the <code>if</code> statement
          is used to check whether the number is even or odd within the
          function. The <code>%</code> operator is used to calculate the
          remainder of <code>number</code> divided by 2. If this remainder is
          equal to 0, then the number is even and the function prints "The
          number is EVEN". Otherwise, the number is odd and the function prints
          "The number is ODD".
        </Typography>

        {/* Example 2 */}
        <Typography variant="h5" mt="3rem" mb="1rem">
          Example 2: Using Function with a List and a Loop:
        </Typography>
        <Code
          code={`def sum_list(numbers):
    total = 0
    for number in numbers:
        total += number
    return total

my_numbers = [1, 2, 3, 4, 5]
result = sum_list(my_numbers)
print(result)
# Output: 15`}
          height="320px"
          width="100%"
        />
        <Typography mt="1rem">
          In the example above, the <code>sum_list()</code> function takes a list
          of numbers as input and returns the sum of those numbers. The code then
          creates a list of numbers and stores it in the <code>my_numbers</code>{' '}
          variable. The function is called with the <code>my_numbers</code> list
          as an argument, and the result is stored in the <code>result</code>{' '}
          variable. Finally, the sum of the list is printed to the console.
        </Typography>
      </Box>
      
    </Container>
  );
}

function Code(props) {
  const code = props.code;

  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        {props.title === true || props.title === `true` ? `Code Editor` : ``}
      </Typography>

      <Box sx={{ height: props.height }}>
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
    </Box>
  );
}

function CodeOutput(props) {
  const output = props.output;
  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: props.height,
          border: '1px solid #ccc',
          borderRadius: '4px',
          minHeight: '120px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography
          fontFamily="monospace"
          component="div"
          sx={{ whiteSpace: 'pre-line' }}
        >
          {output}
        </Typography>
      </Box>
    </Box>
  );
}

function Functions() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />

      <Proceed linkTo="/quiz" />
    </Container>
  );
}

export default Functions;
