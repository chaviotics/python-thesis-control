import React from 'react';
import { Box, Typography } from '@mui/material';

function CodeOutput(props) {
  const content = props.content;
  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        {props.title === true || props.title === `true` ? `Output` : ``}
      </Typography>
      <Box
        sx={{
          height: props.height,
          border: '1px solid #ccc',
          borderRadius: '4px',
          p: '0.5rem',
          overflow: 'auto',
        }}
      >
        <Typography
          fontFamily="monospace"
          component="div"
          sx={{ whiteSpace: 'pre-line' }}
        >
          {content}
        </Typography>
      </Box>
    </Box>
  );
}

export default CodeOutput;
