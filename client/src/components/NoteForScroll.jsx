import React from 'react';
import { Box, Typography } from '@mui/material';

function NoteForScroll() {
  return (
    <Box>
      <Typography fontSize="medium" mt="1rem" fontStyle="italic" pl="2rem">
        Note: If you're having trouble scrolling down, place your mouse cursor
        outside the code editor and scroll as normal.
      </Typography>
    </Box>
  );
}

export default NoteForScroll;
