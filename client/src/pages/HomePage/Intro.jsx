import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function Intro(props) {
  return (
    <Container
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center', mb: 7 }}>
        Welcome to this <br />
        Interactive Python Tutorial
      </Typography>

      <Button
        onClick={props.onButtonClick}
        sx={{ width: '25%' }}
        size="large"
        variant="contained"
      >
        Get Started
      </Button>
    </Container>
  );
}

export default Intro;
