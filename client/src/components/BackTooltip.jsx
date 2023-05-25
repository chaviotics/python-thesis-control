import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Warning from '@mui/icons-material/Warning';

function BackTooltip() {
  const [isHovered, setIsHovered] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    let timeoutId;

    if (isHovered) {
      setShowIcon(true);
    } else {
      timeoutId = setTimeout(() => {
        setShowIcon(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isHovered]);

  return (
    <Box
      // border="1px solid red"
      width="320px"
      height="100px"
      position="fixed"
      top={5}
      left={5}
      zIndex={9999}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showIcon && (
        <Tooltip
          title="You are reminded NOT to go back to the previous page as it is essential for this research & tutorial 😊"
          placement="right"
          arrow
          // open
        >
          <IconButton>
            <Warning sx={{ color: 'yellow', fontSize: '36px' }} />
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
}

export default BackTooltip;
