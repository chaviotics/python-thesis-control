import React, { forwardRef } from 'react';
import { Button, Container, Typography, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const topics = [
  { id: 1, title: 'Introduction to Python' },
  { id: 2, title: 'Arithmetic Operations' },
  { id: 3, title: 'Variables' },
  { id: 4, title: 'Data Types' },
  { id: 5, title: 'Input/Output' },
  { id: 6, title: 'Control Structures' },
  { id: 7, title: 'Data Structures' },
  { id: 8, title: 'For Loops' },
  { id: 9, title: 'While Loops' },
];

function Proceed() {
  const handleProceed = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Button
      component={Link}
      sx={{ alignSelf: 'center', width: '25%' }}
      size="large"
      variant="contained"
      to="/intro/whatispython"
      onClick={handleProceed}
    >
      Proceed
    </Button>
  );
}

function TopicOutline(props, ref) {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', height: '85vh' }}
      ref={ref}
    >
      <Typography sx={{ textAlign: 'center', mb: 3 }}>
        This interactive tutorial will teach you the basics of Python
        programming. Here, you will learn the concepts of:
      </Typography>

      {/* Topics */}
      <Box
        sx={{
          alignSelf: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 200px)',
          gap: '32px',
          mb: 7,
        }}
      >
        {topics.map((topic) => (
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              p: 4,
            }}
            elevation={3}
            key={topic.id}
          >
            <Typography>{topic.title}</Typography>
          </Paper>
        ))}
      </Box>
      <Proceed />
    </Container>
  );
}

export default forwardRef(TopicOutline);
