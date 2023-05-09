import React from 'react';
import { Container, Box, Typography } from '@mui/material';

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
      {/* Intro */}
      <Typography variant="h4" fontWeight="bold">
        Assessment
      </Typography>
      <Typography variant="h2">Python Post-Test</Typography>

      <Typography mt="2rem" mb="1rem">
        Congratulations on completing the entire Python Tutorial! I hope you had
        fun while learning a lot of different concepts in Python. Below will be
        an embedded Google Forms wherein you will answer the post-test. Just
        scroll down to however it is comfortable for you. Good luck!
      </Typography>

      <Typography mt="1rem" mb="2rem">
        Just a few notes. To scroll down in the embedded Google Form, place your
        mouse cursor inside its container. After taking the test, you may exit
        by closing this tab on your browser.
      </Typography>

      {/* Google Form */}
      <Box sx={{ width: '80%', height: '100vh', bgcolor: '#f5f5f5' }}>
        <GoogleForm />
      </Box>
    </Container>
  );
}

function GoogleForm() {
  return (
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSePTnJ5fzzJIgr5oR2rOOXal1pQ1KDSsyRlHaM7KO3Qy9fsFQ/viewform?embedded=true"
      width="100%"
      height="100%"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    >
      Loading…
    </iframe>
  );
}

function Quiz() {
  return (
    <Container
      sx={{
        mt: '64px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <MainContent />
    </Container>
  );
}

export default Quiz;
