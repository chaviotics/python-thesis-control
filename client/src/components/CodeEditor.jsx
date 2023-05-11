import React from 'react';
import { Box, Typography } from '@mui/material';
import Editor from '@monaco-editor/react';

function CodeEditor(props) {
  const content = props.content;

  return (
    <Box sx={{ width: props.width }}>
      <Typography variant="h5" pb="0.5rem">
        {props.title === true || props.title === `true` ? `Code` : ``}
      </Typography>

      <Box sx={{ height: props.height }}>
        <Editor
          theme="vs-dark"
          defaultLanguage="python"
          value={content}
          options={{
            fontSize: '20px',
            readOnly: true,
            scrollBeyondLastLine: false,
          }}
        />
      </Box>
    </Box>
  );
}

export default CodeEditor;
