import React from 'react';
import { Box, Container, Typography } from '@mui/material';
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
        LOOPS
      </Typography>
      <Typography variant="h2">For Loop</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography mb="1rem">
          In Python, a <code>for</code> loop is used to iterate over a sequence
          of elements, such as a list, or a string. The syntax for a{' '}
          <code>for</code> loop is as follows:
        </Typography>

        <CodeSyntax />

        <Typography mt="1rem" mb="1rem">
          In this syntax, <code>variable</code> is a variable name that is
          assigned each element of the <code>sequence</code> on each iteration
          of the loop. The code block inside the loop is executed once for each
          element in the sequence.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          Here are some examples of using for loops in Python:
        </Typography>

        {/* Example 1 */}
        <Typography variant="h5" fontWeight="bold" mt="2rem">
          Example 1: Using a <code>for</code> loop to iterate through a range of
          numbers
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
          <Code
            code={`for i in range(5):
  print(i)`}
            height="180px"
            width="50%"
          />
          <CodeOutput output={`0\n1\n2\n3\n4`} height="180px" width="50%" />
        </Box>
        <Typography>
          In this example, we use the <code>range()</code> function to generate
          a sequence of numbers from 0 to 4 (because <code>range(5)</code>{' '}
          generates a sequence up to, but not including, 5). The{' '}
          <code>for</code> loop then iterates over this sequence and prints each
          number.
        </Typography>

        {/* Example 2 */}
        <Typography variant="h5" fontWeight="bold" mt="4rem">
          Example 2: Using a <code>for</code> loop to iterate through a list of
          items
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
          <Code
            code={`fruits = ['apple', 'banana', 'cherry']
for fruit in fruits:
    print(fruit)`}
            height="180px"
            width="50%"
          />
          <CodeOutput
            output={`apple\nbanana\ncherry`}
            height="180px"
            width="50%"
          />
        </Box>
        <Typography>
          In this example, we create a list of fruit names and use a{' '}
          <code>for</code> loop to iterate over the list and print each fruit
          name.
        </Typography>

        {/* Example 3 */}
        <Typography variant="h5" fontWeight="bold" mt="4rem">
          Example 3: Using a <code>for</code> loop to iterate through a string
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
          <Code
            code={`word = "Python"
for letter in word:
    print(letter)`}
            height="220px"
            width="50%"
          />
          <CodeOutput output={`P\ny\nt\nh\no\nn`} height="220px" width="50%" />
        </Box>
        <Typography>
          In this example, we use a for loop to iterate over each character in
          the string and print it.
        </Typography>

        {/* Break & Continue */}

        <Typography mt="6rem" mb="2rem" variant="h3" textAlign="center">
          <code>break</code> and <code>continue</code> in <code>for</code> loops
        </Typography>

        <Typography>
          Similar to what we learned in <code>while</code> loops,{' '}
          <code>break</code> and <code>continue</code> statements can also be
          used with for <code>loops</code> in Python. Again these two control
          flow statements can be used inside loops to change the behavior of the
          loop.
        </Typography>

        {/* Break */}

        <Typography mt="2rem" variant="h4">
          The <code>break</code> Statement
        </Typography>
        <Typography variant="h5" mt="1rem" mb="1rem">
          Example: Using <code>break</code> to exit a loop early
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
          <Code
            code={`fruits = ['apple', 'banana', 'cherry', 'grapes', 'orange']
for fruit in fruits:
    print(fruit)
    if fruit == 'grapes':
        break`}
            height="220px"
            width="80%"
          />
          <CodeOutput
            output={`apple
banana
cherry
grapes`}
            height="220px"
            width="20%"
          />
        </Box>

        <Typography mt="1rem" mb="1rem">
          In this example, we create a list of fruit names and use a{' '}
          <code>for</code> loop to iterate over the list and print each fruit
          name. We use the <code>break</code> statement to exit the loop when
          the loop variable <code>fruit</code> is equal to <code>'grapes'</code>
          , so the loop will only print the first four fruit names, and not
          continue with rest.
        </Typography>

        {/* Continue */}
        <Typography mt="4rem" variant="h4">
          The <code>continue</code> Statement
        </Typography>
        <Typography variant="h5" mt="1rem" mb="1rem">
          Example : Using <code>continue</code> to skip over some iterations
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
          <Code
            code={`fruits = ['apple', 'banana', 'cherry', 'grapes', 'orange']
for fruit in fruits:
    print(fruit)
    if fruit == 'cherry':
        continue`}
            height="220px"
            width="80%"
          />
          <CodeOutput
            output={`apple
banana
grapes
orange`}
            height="220px"
            width="20%"
          />
        </Box>

        <Typography mt="1rem" mb="1rem">
          In this example, we create a list of fruit names and use a{' '}
          <code>for</code> loop to iterate over the list and print each fruit
          name. We use the <code>continue</code> statement to skip over the
          fruit name 'cherry', so the loop will print all the other fruit names.
        </Typography>
      </Box>
    </Container>
  );
}

function CodeSyntax() {
  const code = `for variable in sequence:
  # code block to be executed on each iteration
  # take note of the indentation

`;

  return (
    <Box sx={{ height: '150px' }}>
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

function Code(props) {
  const code = props.code;

  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
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

function ForLoop() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />

      <Proceed linkTo="/functions" />
    </Container>
  );
}

export default ForLoop;
