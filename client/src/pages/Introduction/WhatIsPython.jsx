import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import pythonLogo from '../../assets/python-logo.svg';

function Summary() {
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
        INTRODUCTION
      </Typography>
      <Typography variant="h2">What is Python?</Typography>

      <Box
        sx={{
          pt: '2rem',
          display: 'flex',
          alignItems: 'center',
          gap: '2.4rem',
        }}
      >
        <img src={pythonLogo} />
        <Box>
          <Typography pb={'1rem'}>
            Python is a high-level, interpreted, and general-purpose programming
            language. It was created by Guido van Rossum in the late 1980s and
            designed to emphasize readability and simplicity.{' '}
          </Typography>
          <Typography>
            Python is dynamically typed, supports multiple programming paradigms
            (such as object-oriented, procedural, and functional), and provides
            a rich standard library and many open-source libraries for a wide
            range of tasks, including data analysis, machine learning, and web
            development.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

function LanguageComparisonTable() {
  return (
    <Box
      sx={{
        mt: '4rem',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid #ddd',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#3f51b5',
          color: '#fff',
          fontWeight: 'bold',
          border: '1px solid #ddd',
        }}
      >
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Feature</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          C
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>Python</Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Syntax</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Lower-level and less intuitive syntax
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          More readable and user-friendly syntax
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Speed</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Generally faster as it is a compiled language
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          Interpreted language, generally slower
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>Memory</Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Provides more control over memory management
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          Manages memory automatically
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>
          Application
        </Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          System programming, low-level tasks
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          Web development, scientific computing, AI/ML
        </Box>
      </Box>
      <Box sx={{ display: 'flex', border: '1px solid #ddd' }}>
        <Box sx={{ flex: 1, p: 1, borderRight: '1px solid #ddd' }}>
          Error Handling
        </Box>
        <Box
          sx={{
            flex: 2,
            p: 1,
            textAlign: 'left',
            borderRight: '1px solid #ddd',
          }}
        >
          Less error-prone due to strong typing
        </Box>
        <Box sx={{ flex: 2, p: 1, textAlign: 'left' }}>
          More prone to errors due to weak typing
        </Box>
      </Box>
    </Box>
  );
}

function WhatIsPython() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Summary />
      <LanguageComparisonTable />
      <Button
        component={Link}
        sx={{ alignSelf: 'center', width: '25%', mt: '3.6rem' }}
        size="large"
        variant="contained"
        to="/intro/helloworld"
      >
        Proceed
      </Button>
      <Typography
        sx={{
          fontSize: 'small',
          fontStyle: 'italic',
          textAlign: 'center',
          mt: '.5rem',
          mb: '5rem',
        }}
      >
        Note: You cannot go back to the previous page once you proceed to the
        next.
      </Typography>
    </Container>
  );
}

export default WhatIsPython;
