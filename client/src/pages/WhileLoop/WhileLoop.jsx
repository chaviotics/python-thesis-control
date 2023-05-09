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
      <Typography variant="h2">While Loop</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography mb="1rem">
          A <code>while</code> loop in Python is used to repeatedly execute a
          block of code as long as a given condition is <code>True</code>. The
          general syntax is:
        </Typography>

        <CodeSyntax />

        <Typography mt="1rem" mb="1rem">
          In the code above, <code>condition</code> is a boolean expression that
          is evaluated before each iteration of the loop. The loop continues to
          run as long as the condition remains <code>True</code>.
        </Typography>

        {/* Code Example 1 */}

        <Typography mt="2rem" mb="1rem">
          Let's consider the code below:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '2rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeExample1 codeHeight="200px" />
          <CodeOutput1 outputHeight="200px" />
        </Box>

        {/* Infinite Loop */}
        <Typography mt="2rem" mb="1rem">
          It's important to make sure that the condition eventually becomes{' '}
          <code>False</code> so that the loop terminates, otherwise it will
          result in an <strong>infinite loop</strong>. For example:
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
          <CodeInfiniteLoopExample codeHeight="200px" />
          <CodeInfiniteLoopOutput outputHeight="200px" />
        </Box>

        <Typography mt="1rem" mb="1rem">
          In the code editor above, you can see that the condition will always
          be true, since even the initial number is greater than 0.
        </Typography>

        <Typography mt="1rem" mb="1rem">
          In the output, it may just be up to 100, but it can go on and on
          unless you stop the code from running. Hence, you be careful with
          infinite loops as this can cause your program to stop responding or to
          crash!
        </Typography>

        <Typography mt="6rem" mb="2rem" variant="h3" textAlign="center">
          <code>break</code> and <code>continue</code>
        </Typography>

        <Typography mt="1rem" mb="1rem">
          In Python, <code>break</code> and <code>continue</code> are two
          control flow statements that can be used inside loops to change the
          behavior of the loop.
        </Typography>

        {/* Break Statement */}
        <Typography mt="2rem" variant="h4">
          The <code>break</code> Statement
        </Typography>
        <Typography mt="1rem" mb="1rem">
          When executed inside a loop, the break statement causes the loop to
          terminate immediately and the control is transferred to the next
          statement outside the loop. It is commonly used to exit a loop when a
          certain condition is met.
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
          <CodeBreakExample codeHeight="220px" />
          <CodeBreakOutput outputHeight="220px" />
        </Box>

        <Typography mt="1rem" mb="1rem">
          In this example, we start with <code>i = 0</code> and use a{' '}
          <code>while</code> loop to print the value of <code>i</code> on each
          iteration. We use the <code>break</code> statement to exit the loop
          when <code>i == 5</code>, so the loop will only run for the first 6
          iterations.
        </Typography>

        {/* Continue Statement */}
        <Typography mt="4rem" variant="h4">
          The <code>continue</code> Statement
        </Typography>
        <Typography mt="1rem" mb="1rem">
          When executed inside a loop, the <code>continue</code>
          statement causes the loop to skip the rest of the current iteration
          and move on to the next iteration. It is commonly used to skip over
          certain values in a loop, or to execute a certain block of code only
          when a certain condition is met.
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
          <CodeContinueExample codeHeight="220px" />
          <CodeContinueOutput outputHeight="220px" />
        </Box>

        <Typography mt="1rem" mb="1rem">
          In this example, we start with <code>i = 0</code> and use a{' '}
          <code>while</code> loop to increment the value of <code>i</code> on
          each iteration. We use the <code>continue</code> statement to skip
          over even values of <code>i</code> and only print odd values. So the
          loop will print the values 1, 3, 5, 7, and 9.
        </Typography>
      </Box>
    </Container>
  );
}

function CodeSyntax() {
  const code = `while condition_is_true:
  # code to be executed as long as the condition is True
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

// Code Example 1
function CodeExample1(props) {
  const code = `count = 0
while count < 5:
    print(count)
    count += 1
`;

  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>

      <Box sx={{ height: props.codeHeight }}>
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

function CodeOutput1(props) {
  const output = `0
1
2
3
4`;
  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: props.outputHeight,
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

// Infinite Loop Example
function CodeInfiniteLoopExample(props) {
  const code = `count = 1
while count > 0:
    print(count)
    count += 1
`;

  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>

      <Box sx={{ height: props.codeHeight }}>
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

function CodeInfiniteLoopOutput(props) {
  const output = Array.from({ length: 100 }, (_, i) => i + 1).join('\n');
  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: props.outputHeight,
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

// Break Example
function CodeBreakExample(props) {
  const code = `i = 0
while i < 10:
    print(i)
    if i == 5:
        break
    i += 1
`;

  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>

      <Box sx={{ height: props.codeHeight }}>
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

function CodeBreakOutput(props) {
  const output = `0
1
2
3
4
5`;
  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: props.outputHeight,
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

// ConContinue Example

function CodeContinueExample(props) {
  const code = `i = 0
while i < 10:
    i += 1
    if i % 2 == 0:
        continue
    print(i)
`;

  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>

      <Box sx={{ height: props.codeHeight }}>
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

function CodeContinueOutput(props) {
  const output = `1
3
5
7
9`;
  return (
    <Box sx={{ width: '50%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: props.outputHeight,
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

function WhileLoop() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />

      <Proceed linkTo="/forloop" />
    </Container>
  );
}

export default WhileLoop;
