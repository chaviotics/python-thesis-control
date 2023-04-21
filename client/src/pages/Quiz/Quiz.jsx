import React from 'react';
import { Container, Box } from '@mui/material';

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
    <Container>
      <Box sx={{ width: '100%', height: '100vh', bgcolor: '#f5f5f5' }}>
        <GoogleForm />
      </Box>
    </Container>
  );
}

export default Quiz;
