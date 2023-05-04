import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

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
      <Typography variant="h4" fontWeight="bold">
        CONDITIONAL STATEMENTS
      </Typography>
      <Typography variant="h2">Conditional Statements</Typography>

      <Box sx={{ mt: '2rem', alignSelf: 'flex-start' }}>
        <Typography>
          Conditional statements (<em>also called if-else statements</em>) allow
          you to control the flow of your program based on certain conditions.
          They allow you to make decisions in your code and execute different
          blocks of code depending on the results of the conditions.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          The basic syntax of a conditional statement in Python is as follows:
        </Typography>

        <CodeSyntax />

        {/* 1st Example */}

        <Typography mt="1rem" mb="2rem">
          Here, <code>condition</code> is a expression that evaluates to either{' '}
          <code>True</code> or <code>False</code>. If the <code>condition</code>{' '}
          is <code>True</code>, the code indented under the <code>if</code>{' '}
          statement will be executed. If it's <code>False</code>, the indented
          code will be skipped.
        </Typography>

        <Typography>For example:</Typography>

        <Box
          sx={{
            height: '150px',
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeExample1 />
          <CodeOutput1 />
        </Box>

        <Typography mb="2rem">
          In the example above, the <code>condition</code>{' '}
          <code>age &gt;= 18</code> checks if the value of <code>age</code> is
          greater than or equal to 18. If it is, the code inside the{' '}
          <code>if</code> statement will be executed and the message "You are
          old enough to vote." will be printed.
        </Typography>

        {/* 2nd Example */}
        <Typography mt="1rem">
          You can also use an <code>else</code> statement to specify what should
          happen if the <code>condition</code> is <code>False</code>:
        </Typography>

        <Box
          sx={{
            height: '200px',
            mt: '1rem',
            mb: '4rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeExample2 />
          <CodeOutput2 />
        </Box>

        <Typography mb="2rem">
          In the example above, if the value of <code>age</code> is greater than
          or equal to 18, the first message will be printed. If not, the second
          message will be printed.
        </Typography>

        {/* 3rd Example */}
        <Typography>
          Also, you can even add multiple conditions using <code>elif</code>{' '}
          statements:
        </Typography>
        <Box
          sx={{
            mt: '1rem',
            mb: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
          }}
        >
          <CodeExample3 />
          <CodeOutput3 />
        </Box>

        <Typography mb="2rem">
          In the example above, the code checks multiple conditions to determine
          the age group of the person. Depending on the result of these
          conditions, different messages will be printed.
        </Typography>

        <Typography fontStyle="italic">
          In Python, you can use the <code>and</code>, <code>or</code> and{' '}
          <code>not</code> logical operators in conditional statements.
        </Typography>
      </Box>
    </Container>
  );
}

function CodeSyntax() {
  const code = `if condition:
  # run this code if the condition is True
  # take note of the indentation
`;

  return (
    <Box sx={{ height: '140px' }}>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '20px',
          readOnly: true,
        }}
      />
    </Box>
  );
}

// Code Example 1

function CodeExample1() {
  const code = `age = 20
if age >= 18:
    print("You are old enough to vote.")
`;

  return (
    <Box sx={{ height: '100%', width: '60%' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '20px',
          readOnly: true,
        }}
      />
    </Box>
  );
}

function CodeOutput1() {
  return (
    <Box sx={{ height: '100%', width: '40%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
          minHeight: '120px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography fontFamily="monospace">
          You are old enough to vote.
        </Typography>
      </Box>
    </Box>
  );
}

// Code Example 2

function CodeExample2() {
  const code = `age = 15
  if age >= 18:
      print("You are old enough to vote.")
  else:
      print("You are not old enough to vote.")
`;

  return (
    <Box sx={{ height: '100%', width: '60%' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '20px',
          readOnly: true,
        }}
      />
    </Box>
  );
}

function CodeOutput2() {
  return (
    <Box sx={{ height: '100%', width: '40%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
          minHeight: '120px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography fontFamily="monospace">
          You are not old enough to vote.
        </Typography>
      </Box>
    </Box>
  );
}

// Code Example 3

function CodeExample3() {
  const code = `age = 20
if age < 18:
    print("You are a minor.")
elif age >= 18 and age < 21:
    print("You are an adult but not old enough to drink.")
else:
    print("You are an adult and can drink.")
    `;

  return (
    <Box sx={{ height: '250px', width: '100%', mb: '2rem' }}>
      <Typography variant="h5" pb="0.5rem">
        Code Editor
      </Typography>
      <Editor
        theme="vs-dark"
        defaultLanguage="python"
        value={code}
        options={{
          fontSize: '20px',
          readOnly: true,
        }}
      />
    </Box>
  );
}

function CodeOutput3() {
  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <Typography variant="h5" pb="0.5rem">
        Output
      </Typography>
      <Box
        sx={{
          height: '100%',
          border: '1px solid #ccc',
          borderRadius: '4px',
          minHeight: '120px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography fontFamily="monospace">
          You are an adult but not old enough to drink.
        </Typography>
      </Box>
    </Box>
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
        to="/forloop"
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

function ConditionalStatements() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />
      <Proceed />
    </Container>
  );
}

export default ConditionalStatements;
