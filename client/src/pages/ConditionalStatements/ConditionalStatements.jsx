import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import CodeEditor from '../../components/CodeEditor';
import CodeOutput from '../../components/CodeOutput';
import Proceed from '../../components/Proceed';
import NoteForScroll from '../../components/NoteForScroll';

function ConditionalStatements() {
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
        CONDITIONAL STATEMENTS
      </Typography>
      <Typography variant="h2">
        <code>if</code>-<code>else</code> Statements
      </Typography>

      <Box sx={{ width: '100%', mt: '2rem', alignSelf: 'flex-start' }}>
        {/* Introduction */}
        <Typography>
          Conditional statements (<em>also called if-else statements</em>) allow
          you to control the flow of your program based on certain conditions.
          They allow you to make decisions in your code and execute different
          blocks of code depending on the results of the conditions.
        </Typography>

        <Typography mt="2rem" mb="1rem">
          The basic syntax of a conditional statement in Python is as follows:
        </Typography>

        <CodeEditor
          content={`if condition == True:
    # run this code if the condition is True
    # take note of the indentation
`}
          height="150px"
          width="100%"
        />

        <Typography mt="2rem" mb="2rem">
          Here, <code>condition</code> is a expression that evaluates to either{' '}
          <code>True</code> or <code>False</code>. If the <code>condition</code>{' '}
          is <code>True</code>, the code indented under the <code>if</code>{' '}
          statement will be executed. If it's <code>False</code>, the indented
          code will be skipped.
        </Typography>

        <Typography mt="2rem" mb="4rem" fontStyle="italic">
          <strong>Note:</strong> The <code>==</code> operator is a comparison
          operator that checks whether two values are equal. When the{' '}
          <code>==</code> operator is used, it returns a Boolean value of{' '}
          <code>True</code> if the values being compared are equal, and{' '}
          <code>False</code> if they are not equal.
        </Typography>

        {/* <NoteForScroll /> */}

        {/* 1st Example */}

        <Typography>For example:</Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '2rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`age = 20
if age >= 18:
    print("You are old enough to vote.")`}
            height="150px"
            width="60%"
            title="true"
          />
          <CodeOutput
            content={`You are old enough to vote.`}
            height="150px"
            width="40%"
            title="true"
          />
        </Box>

        <Typography mb="4rem">
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
            mt: '1rem',
            mb: '2rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
          }}
        >
          {/* <CodeExample2 />
          <CodeOutput2 /> */}
          <CodeEditor
            content={`age = 15
if age >= 18:
    print("You are old enough to vote.")
else:
    print("You are not old enough to vote.")
`}
            height="200px"
            width="65%"
            title="true"
          />
          <CodeOutput
            content={`You are not old enough to vote.`}
            height="200px"
            width="35%"
            title="true"
          />
        </Box>

        <Typography mb="4rem">
          In the example above, if the value of <code>age</code> is greater than
          or equal to 18, the first message will be printed. If not, the second
          message will be printed.
        </Typography>

        {/* 3rd Example */}
        <Typography>
          Also, you can even add multiple conditions using <code>elif</code>{' '}
          (Python's version of "else if") statements:
        </Typography>

        <Box
          sx={{
            mt: '1rem',
            mb: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}
        >
          <CodeEditor
            content={`age = 20
if age < 18:
    print("You are a minor.")
elif age >= 18 and age < 21:
    print("You are an adult but not old enough to drink.")
else:
    print("You are an adult and can drink.")
`}
            height="250px"
            width="100%"
            title="true"
          />

          <CodeOutput
            content={`You are an adult but not old enough to drink.`}
            height="150px"
            width="100%"
            title="true"
          />
        </Box>

        <Typography mb="4rem">
          In the example above, the code checks multiple conditions to determine
          the age group of the person. Depending on the result of these
          conditions, different messages will be printed.
        </Typography>

        <Typography fontStyle="italic">
          In Python, you can use the <code>and</code>, <code>or</code> and{' '}
          <code>not</code> logical operators in conditional statements.
        </Typography>
      </Box>

      <Proceed linkTo="/lists" />
    </Container>
  );
}

export default ConditionalStatements;
