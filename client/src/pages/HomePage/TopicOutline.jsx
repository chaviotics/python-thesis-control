import React, { forwardRef } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

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
  { id: 10, title: 'Functions' },
];

function TopicOutline(props, ref) {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: '7rem',
        height: '100vh',
      }}
      ref={ref}
    >
      <Typography sx={{ textAlign: 'center', mb: 1 }} variant="h3">
        TOPICS
      </Typography>
      <Typography sx={{ textAlign: 'center', mb: 3 }}>
        This interactive tutorial will teach you the basics of Python
        programming. Here, you will learn the concepts of:
      </Typography>

      {/* Topics */}
      <Box
        sx={{
          alignSelf: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 200px)',
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
              transition: 'all 0.2s',
              color: '#0b3c53',
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
            elevation={3}
            key={topic.id}
          >
            <Typography>{topic.title}</Typography>
          </Paper>
        ))}
      </Box>
      <Typography
        sx={{
          fontSize: 'small',
          fontStyle: 'italic',
          textAlign: 'center',
          mt: '1rem',
        }}
      >
        You may scroll down after reading this part!
      </Typography>
    </Container>
  );
}

export default forwardRef(TopicOutline);
