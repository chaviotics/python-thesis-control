import React, { forwardRef } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';

const topics = [
  { id: 1, title: 'Introduction to Python' },
  { id: 2, title: 'Arithmetic Operations' },
  { id: 3, title: 'Data Types' },
  { id: 4, title: 'Variables' },
  // { id: 5, title: 'Input/Output' },
  { id: 6, title: 'Conditional Statements' },
  { id: 7, title: 'Lists' },
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
        pt: '10vh',
        mb: '25vh',
      }}
      ref={ref}
    >
      <Typography sx={{ textAlign: 'center', mb: 1 }} variant="h3">
        TOPICS
      </Typography>
      <Typography sx={{ textAlign: 'center', mb: 3 }}>
        This introductory Python tutorial will teach you the basics of Python
        programming. Here, you will learn the concepts of:
      </Typography>

      {/* Topics */}
      <Box
        sx={{
          alignSelf: 'center',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 250px)',
          gap: '32px',
          mb: 5,
        }}
      >
        {topics.map((topic) => (
          <Paper
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              p: '2.5rem',
              transition: 'all 0.2s',
              color: '#0b3c53',
            }}
            elevation={3}
            key={topic.id}
          >
            <Typography
              sx={{
                fontSize: '20px',
                cursor: 'default',
                transition: 'all 0.2s',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              }}
            >
              {topic.title}
            </Typography>
          </Paper>
        ))}
      </Box>
      <Typography
        sx={{
          fontSize: 'medium',
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
