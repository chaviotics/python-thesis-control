import React, { useRef } from 'react';
import { Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Intro from './Intro';
import TopicOutline from './TopicOutline';
import Message from './Message';

function Proceed() {
  const handleProceed = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Button
      component={Link}
      sx={{ alignSelf: 'center', width: '25%', mt: '3rem', mb: '7rem' }}
      size="large"
      variant="contained"
      to="/intro/whatispython"
      onClick={handleProceed}
    >
      Proceed
    </Button>
  );
}

function HomePage() {
  const scrollRef = useRef(null);

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column' }}>
      <Intro onButtonClick={handleButtonClick} />
      <TopicOutline ref={scrollRef} />
      <Message />
      <Proceed />
    </Container>
  );
}

export default HomePage;
