import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Proceed(props) {
  const handleProceed = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Button
        component={Link}
        sx={{ alignSelf: 'center', width: '25%', mt: '5rem' }}
        size="large"
        variant="contained"
        to={props.linkTo}
        onClick={handleProceed}
      >
        Proceed
      </Button>
      <Typography
        sx={{
          fontSize: 'small',
          fontStyle: 'italic',
          textAlign: 'center',
          mt: '.5rem',
          mb: '7rem',
        }}
      >
        Reminders: Please do not go back to the previous page.
        <br />
        Take your time and review the material carefully before moving forward.
      </Typography>
    </Box>
  );
}
export default Proceed;
