import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';

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
        an embedded Google Forms wherein you will answer the post-test. Good
        luck!
      </Typography>

      <Typography mt="1rem" mb="1rem">
        Please use your UP Mail in answering the form. If you're encountering
        problems regarding the embedded Google Form below, you can click on this
        button to open another tab for the post-test →{' '}
        <Button
          variant="contained"
          size="small"
          href="https://forms.gle/KCdsGf9T1LHyALGL7"
          target="_blank"
          rel="noreferrer noopener"
        >
          Post-Test Python
        </Button>
      </Typography>

      <Typography mt="1rem" mb="4rem">
        A few notes to remember: you can scroll down in the embedded Google Form
        by placing your mouse cursor inside its container, and you may exit by
        closing this tab on your browser.
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
