import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import pythonLogo from '../../assets/python-logo.svg';

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
      <Typography
        variant="h2"
        sx={{ textAlign: 'center', mb: 7 }}
        fontWeight="regular"
      >
        Welcome to this <br />
        Introductory Python Tutorial!
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
