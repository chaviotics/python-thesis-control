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

name = "Isaac"
print(name)`}
            height="220px"
            width="50%"
            title="true"
          />

          <CodeOutput
            content={`10\nIsaac`}
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

name = "Isaac"
print(type(name))
`}
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

        <Typography mt="4rem" mb="1rem">
          What if, we can place in expressions such as variables in our{' '}
          <code>print()</code> statements? Now knowing about variables, let's
          upgrade our knowledge with the concept{' '}
          <strong>Formatted Strings</strong>!
        </Typography>

        {/* Formatted Strings */}
        <Typography mt="4rem" textAlign="center" variant="h3">
          Formatted Strings
        </Typography>

        <Typography mt="2rem" mb="1rem">
          Formatted strings, also known as f-strings, are a feature in Python
          3.6 and later versions that allow for easy string formatting. They
          start with the letter "<code>f</code>" and include curly braces{' '}
          <code>{`{}`}</code> containing expressions that are evaluated at
          runtime and then formatted into the string.
        </Typography>

        <Typography mt="2rem" mb="1rem" fontStyle="italic">
          In Python, an{' '}
          <u>
            <strong>expression</strong>
          </u>{' '}
          is a combination of values, variables, operators, and function calls
          that evaluates to a single value.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          For example, consider the following code:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`name = "Isaac"
age = 25
print(f"My name is {name} and I am {age} years old.")
`}
            height="150px"
            width="100%"
            title="true"
          />

          <Typography mt="1rem" mb="1rem">
            In code above, the f-string is used to embed the variables{' '}
            <code>name</code> and <code>age</code> within the string. The
            expressions inside the curly braces are evaluated at runtime and the
            resulting values are formatted into the string.
          </Typography>

          <Typography mt="1rem" mb="rem">
            When the code is executed, the output will be:
          </Typography>

          <CodeOutput
            content={`My name is Isaac and I am 25 years old.`}
            height="150px"
            width="100%"
            title="true"
          />
        </Box>

        <Typography mt="4rem">
          Formatted strings can also include expressions that call functions or
          perform arithmetic operations, making it easy to create complex
          strings with dynamic content. Overall, formatted strings provide a
          concise and readable way to insert variable values into a string in
          Python.
        </Typography>
      </Box>

      <Proceed linkTo="/arithmeticops" />
    </Container>
  );
}

export default Variable;
