import React from 'react';
import { Box, Typography } from '@mui/material';

function NoteForScroll() {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Typography
        padding="16px"
        display="inline"
        border="2px solid white"
        borderRadius="16px"
        fontSize="medium"
        mt="1rem"
        fontStyle="italic"
        textAlign="center"
      >
        Note: If you're having trouble scrolling down,{' '}
        <strong>place your mouse cursor outside the code editor/s</strong> and
        scroll as normal.
      </Typography>
    </Box>
  );
}

export default NoteForScroll;
